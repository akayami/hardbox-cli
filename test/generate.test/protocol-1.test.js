const generate = require('../../lib/generate');
const srequre = require('require-from-string');
const {expect} = require('chai');

const make_argv = (input = []) => {
	return ['/node/path', '/script/path'].concat(input);
};

describe('Generate Command', () => {
	
	it('Need to parse protocol', () => {
		expect(() => {
		const output = generate({
			argv:  make_argv(['-r', 'invalid'])
		});
		}).to.throw('Invalid protocol requested. Only http and https are supported');
	});
});