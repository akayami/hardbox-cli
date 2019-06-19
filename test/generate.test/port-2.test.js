const generate = require('../../lib/generate');
const srequre = require('require-from-string');
const {expect} = require('chai');

const make_argv = (input = []) => {
	return ['/node/path', '/script/path'].concat(input);
};

describe('Generate Command', () => {
	

	it('Port argument invalid', () => {
		expect(() => {
			generate({
				argv:  make_argv(['--port', 'error'])
			});
		}).to.throw('Port is out of bounds [1-65535] or is not a number');
	});

	// it('Need to parse protocol', () => {
	// 	let output = require('../lib/generate')({
	// 		argv:  make_argv()
	// 	});
	// 	let o = srequre(output);
	// 	console.log(o);
	// 	expect(o).to.be.an('object');
	// 	expect(o).to.have.property('protocol').equal('http');
	// });
});