
class Hand {
	constructor({name, beats}) {
		this.name = name;
		this._beats = beats;
	}

	beats(hand) {
		return this._beats.indexOf(hand.name) > -1;
	}
}

export default Hand;
