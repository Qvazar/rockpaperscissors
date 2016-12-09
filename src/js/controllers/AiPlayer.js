
class AiPlayer {
	constructor({radio, hands}) {
		const randomHand = () => hands[Math.floor(Math.random() * hands.length)]

		this._currentHand = randomHand();

		this.minDelayUntilNewHand = 500;
		this.maxDelayUntilNewHand = 2000;

		let timeOfChosenHand = 0;

		const lId = radio.listen((msg) => {
			const timeSinceNewHand = msg.time - timeOfChosenHand;

			switch (msg.type) {
				case "game:start":
					break;
				case "game:heartbeat":
					if ((timeSinceNewHand > this.minDelayUntilNewHand && Math.random() < 0.02) || timeSinceNewHand >= this.maxDelayUntilNewHand) {
						timeOfChosenHand = msg.time;
						this._currentHand = randomHand();
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
