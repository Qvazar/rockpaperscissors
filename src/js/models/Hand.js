import { isArrayOfString } from '../utils';

class Hand {
	constructor({name, beats}) {
		if (typeof name !== "string" || !isArrayOfString(beats)) {
			throw new Error("Illegal arguments");
		}

		this.name = name;
		this._beats = beats;
	}

	beats(hand) {
		if (!hand || typeof hand.name !== "string") {
			throw new Error("");
		}

		return this._beats.indexOf(hand.name) > -1;
	}
}

export default Hand;
