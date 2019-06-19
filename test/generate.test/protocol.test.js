const generate = require('../../lib/generate');
const srequre = require('require-from-string');
const {expect} = require('chai');

const make_argv = (input = []) => {
	return ['/node/path', '/script/path'].concat(input);
};

describe('Generate Command', () => {
	
	it('Need to parse protocol', () => {
		const output = generate({
			argv:  make_argv(['-r', 'http'])
		});
		const o = srequre(output);
		expect(o).to.be.an('object');
		expect(o).to.have.property('vhost')
			.to.be.an('object')
			.to.have.property('protocol')
			.equal('http');
	});
});