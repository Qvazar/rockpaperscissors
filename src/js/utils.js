export const isArrayOfString = (val) => {
	return Array.isArray(val) && !val.some((v) => typeof v !== "string");
};

export const findInArray = (() => {
	if (typeof [].find === "function") {
		return (arr, test, thisArg) => arr ? arr.find(test, thisArg) : undefined;
	} else {
		return (arr, test, thisArg) => {
			if (arr) {
				for (var i = 0, l = arr.length; i < l; ++i) {
					let val = arr[i];
					if (test.apply(thisArg, val, i, arr)) {
						return val;
					}
				}
			}

			return undefined;
		};
	}
})();

export const bindMethods = (obj, ...methods) => {
	methods.forEach((fn) => {
		obj[fn] = obj[fn].bind(obj);
	});
};
