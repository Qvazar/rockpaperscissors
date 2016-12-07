export const isArrayOfString = (val) => {
	return Array.isArray(val) && !val.some((v) => typeof v !== "string");
};
