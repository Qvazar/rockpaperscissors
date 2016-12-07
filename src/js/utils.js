export const isArrayOfString = (val) => {
	return Array.isArray(val) && !val.some((v) => typeof v !== "string");
};

export const findInArray = (function() {
	if (typeof [].find === "function") {
		return (arr, test, thisArg) => arr.find(test, thisArg);
	} else {
		return (arr, test, thisArg) => {
			for (var i = 0, l = arr.length; i < l; ++i) {
				let val = arr[i];
				if (test.apply(thisArg, val)) {
					return val;
				}
			}

			return undefined;
		};
	}
}());

export const bindMethods = (obj, ...methods) => {
	methods.forEach((fn) => {
		obj[fn] = obj[fn].bind(obj);
	});
};
