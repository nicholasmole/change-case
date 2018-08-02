var expect = require('chai').expect;
var changeCase = require('../index');

describe('#Run sentence case', function() {
	it('Handle none string', function() {
		var input = 500;
		var result = changeCase.sCase(input);
		
		expect(result).to.equal(input);
	});
	it('Convert input to Sentence Case', function() {
		var input = "foo bar cats"
		var result = changeCase.sCase(input);
		expect(result).to.equal('Foo bar cats');
	});
	it('Convert input to Title Case', function() {
		var input = "foo bar cats"
		var result = changeCase.tCase(input);
		expect(result).to.equal('Foo Bar Cats');
	});
});
