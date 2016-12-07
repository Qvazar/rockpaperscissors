
class AiPlayer {
	constructor({radio, hands}) {
		this._possibleHands = hands;
		this._currentHand = hands[Math.floor(hands.length / 2)];

		const lId = radio.listen((msg) => {
			switch (msg.type) {
				case "game:start":
					break;
				case "game:ending":
					this._currentHand = this._possibleHands[Math.floor(Math.random() * this._possibleHands.length)];
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
