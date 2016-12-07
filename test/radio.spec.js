import Radio from '../src/js/Radio';

describe("Radio", () => {

	var radio;

	beforeEach(() => {
		radio = new Radio();
	});

	it("must accept listeners", () => {
		radio.listen(() => {});
		expect(radio.listenerCount).to.equal(1);

		radio.listen(() => {});
		radio.listen(() => {});

		expect(radio.listenerCount).to.equal(3);
	});

	it("must only accept function listeners", () => {
		expect(() => radio.listen(1)).to.throw();
		expect(() => radio.listen("")).to.throw();
		expect(() => radio.listen()).to.throw();
	});

	it("must remove listeners", () => {
		const id = radio.listen(() => {});
		radio.listen(() => {});
		radio.listen(() => {});

		radio.unlisten(id);

		expect(radio.listenerCount).to.equal(2);
	});

	it("must send messages", () => {
		let called = false;
		radio.listen((msg) => {
			called = msg.val;
		});

		expect(called).to.equal(false);

		radio.send({val: true});

		expect(called).to.equal(true);
	});
});
