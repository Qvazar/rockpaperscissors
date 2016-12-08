
class AiPlayer {
	constructor({radio, hands}) {
		this._possibleHands = hands;
		this._currentHand = hands[Math.floor(hands.length / 2)];

		const minDelayUntilNewHand = 500;
		let timeOfChosenHand = 0;

		const lId = radio.listen((msg) => {
			const timeSinceNewHand = msg.time - timeOfChosenHand;

			switch (msg.type) {
				case "game:start":
					break;
				case "game:heartbeat":
					if (timeSinceNewHand > minDelayUntilNewHand && Math.random() < 0.01) {
						timeOfChosenHand = msg.time;
						this._currentHand = this._possibleHands[Math.floor(Math.random() * this._possibleHands.length)];
					}
					break;
				case "game:ending":
					break;
				case "game:end":
					radio.unlisten(lId);
					break;
				default:
					break;
			}
		});
	}

	get isAi() {
		return true;
	}

	get hand() {
		return this._currentHand;
	}
}

export default AiPlayer;
