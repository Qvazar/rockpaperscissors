import { findInArray, bindMethods } from '../utils';
import { PREGAME, INGAME, POSTGAME } from '../states';
import HumanPlayer from './HumanPlayer';
import AiPlayer from './AiPlayer';

class GameController {
	constructor({radio, hands, roundTime = 3000}) {
		this.radio = radio;
		this.hands = hands;
		this.players = null;
		this.state = PREGAME;
		this.roundTime = roundTime;

		radio.set("gameState", () => this.state);
		radio.set("hands", () => this.hands);
		radio.set("players", () => this.players);
		radio.set("winner", () => this.winner);

		bindMethods(this, "start", "reset", "selectHand");
	}

	start(playerType) {
		const radio = this.radio;
		let player1;

		switch (playerType) {
			case "human":
				player1 = new HumanPlayer({radio});
				player1.hand = this.hands[Math.floor(this.hands.length / 2)];
				break;
			case "ai":
				player1 = new AiPlayer({radio, hands: this.hands});
				break;
			default:
				throw new Error("Unknown playerType");
		}

		this.players = [player1, new AiPlayer({radio, hands: this.hands})];

		radio.send({ type: "game:starting" });
		this.state = INGAME;
		radio.send({ type: "game:start" });

		let startTime = null;

		const onFrame = (time) => {
			if (startTime === null) {
				startTime = time;
			}

			const timeSinceStart = time - startTime;

			if (timeSinceStart >= this.roundTime) {
				radio.send({type: "game:ending"});
				this.state = POSTGAME;
				radio.send({type: "game:end"});
			} else {
				radio.send({
					type: "game:heartbeat",
					time: timeSinceStart,
					timeLeft: this.roundTime - timeSinceStart
				});
			}

			if (this.state === INGAME) {
				requestAnimationFrame(onFrame);
			}
		};

		requestAnimationFrame(onFrame);
	}

	reset() {
		this.state = PREGAME;
		this.radio.send({ type: "game:reset" });
	}

	selectHand(player, handName) {
		if (!player) {
			throw new Error("Unknown player");
		}

		const hand = findInArray(this.hands, (h) => h.name === handName);
		if (!hand) {
			throw new Error("Unknown hand");
		}

		player.hand = hand;
	}

	get winner() {
		if (this.state === POSTGAME) {
			const p1 = this.players[0];
			const p2 = this.players[1];

			if (p1.hand.beats(p2.hand)) {
				return "Player 1";
			} else if (p2.hand.beats(p1.hand)) {
				return "Player 2";
			}
		}

		return null;
	}
}

export default GameController;
