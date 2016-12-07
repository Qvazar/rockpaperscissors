import { v4 as uuid } from 'uuid';

class Radio {
	constructor() {
		this._listeners = {};
	}

	listen(cb) {
		if (typeof cb !== "function") {
			throw new Error("cb is not a function");
		}

		const id = uuid();
		this._listeners[id] = cb;

		return id;
	}

	unlisten(cbId) {
		delete this._listeners[cbId];
	}

	send(msg) {
		const listeners = this._listeners;
		Object.keys(listeners).forEach(cbId => listeners[cbId](msg));
	}

	get listenerCount() {
		return Object.keys(this._listeners).length;
	}

	clear() {
		this._listeners = {};
	}
}

export default Radio;
