import { isArrayOfString } from '../src/js/utils';

describe("isArrayOfString", () => {

	it("should return false on null", () => {
		expect(isArrayOfString(null)).to.equal(false);
	});

	it("should return true on empty array", () => {
		expect(isArrayOfString([])).to.equal(true);
	});

	it("should return true on array with strings", () => {
		expect(isArrayOfString(["1", "2"])).to.equal(true);
	});

	it("should return false on array containing something that is not a string", () => {
		expect(isArrayOfString(["1", "2", {}, "4"])).to.equal(false);
	});

	it("should return false on something that is not an array", () => {
		expect(isArrayOfString({})).to.equal(false);
	});

});
