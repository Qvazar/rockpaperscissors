import Hand from '../../src/js/models/Hand';

describe("Hand", () => {

	it("should fail construction on invalid args", () => {
		expect(() => new Hand()).to.throw();
		expect(() => new Hand("")).to.throw();
		expect(() => new Hand({name:""})).to.throw();
		expect(() => new Hand({beats:""})).to.throw();
		expect(() => new Hand({beats:{}})).to.throw();
		expect(() => new Hand({beats:[]})).to.throw();
	});

	it("should construct", () => {
		const h = new Hand({name:"paper", beats:["rock"]});
		expect(h).to.exist;
	});

	it("should beat that which it can beat", () => {
		const paper = new Hand({name:"paper", beats:["rock"]});
		const rock = new Hand({name:"rock", beats:["scissors"]});
		const scissors = new Hand({name:"scissors", beats:["paper"]});

		expect(paper.beats(rock)).to.be.true;
		expect(paper.beats(paper)).to.be.false;
		expect(paper.beats(scissors)).to.be.false;

		expect(rock.beats(rock)).to.be.false;
		expect(rock.beats(paper)).to.be.false;
		expect(rock.beats(scissors)).to.be.true;

		expect(scissors.beats(rock)).to.be.false;
		expect(scissors.beats(paper)).to.be.true;
		expect(scissors.beats(scissors)).to.be.false;
	});

});
