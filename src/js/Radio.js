import { v4 as uuid } from 'uuid';

class Radio {
	constructor() {
		this._listeners = {};
		this._vals = {};
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
		for (var lId in listeners) {
			listeners[lId](msg);
		}
	}

	get listenerCount() {
		return Object.keys(this._listeners).length;
	}

	clear() {
		this._listeners = {};
	}

	set(key, valFn) {
		if (typeof valFn !== "function") {
			throw new Error("valFn is not a function");
		}

		this._vals[key] = valFn;
	}

	get(key) {
		return this._vals[key]();
	}
}

export default Radio;
