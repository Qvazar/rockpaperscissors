import { isArrayOfString, findInArray, bindMethods } from '../src/js/utils';

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

describe("findInArray", () => {

	it("should find an item in an array", () => {
		const item = {test:true};
		const array = [{}, {}, item, {}];

		expect(findInArray(array, v => !!v.test)).to.equal(item);
	});

	it("should return undefined when an item is not found", () => {
		const array = [{}, {}, {}];

		expect(findInArray(array, v => !!v.test)).to.be.undefined;
	});

	it("should pass the correct parameters to the callback", () => {
		const array = [{n:1}, {n:2}, {n:3}];

		findInArray(array, (v, i, arr) => {
			expect(v).to.equal(array[i]);
			expect(i).to.equal(array[i].n-1);
			expect(arr).to.equal(array);
		});
	});

	it("should return undefined on empty or null array", () => {
		expect(findInArray([], ()=>{})).to.be.undefined;
		expect(findInArray(null, ()=>{})).to.be.undefined;

	});
});

describe("bindMethods", () => {

	it("should bind methods on an object to always have thisArg as the object", () => {
		const o = {
			a(cb) { cb(this); },
			b(cb) { cb(this); }
		};

		(() => o.a)()(t => expect(t).to.be.undefined);
		(() => o.b)()(t => expect(t).to.be.undefined);

		bindMethods(o, "a");

		(() => o.a)()(t => expect(t).to.equal(o));
		(() => o.b)()(t => expect(t).to.be.undefined);

		bindMethods(o, "a", "b");

		(() => o.a)()(t => expect(t).to.equal(o));
		(() => o.b)()(t => expect(t).to.equal(o));
	});

});
