
class HumanPlayer {
	constructor() {
		this._currentHand = null;
	}

	get isAi() {
		return false;
	}

	get hand() {
		return this._currentHand;
	}

	set hand(hand) {
		this._currentHand = hand;
	}
}

export default HumanPlayer;
