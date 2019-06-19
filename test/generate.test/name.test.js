const generate = require('../../lib/generate');
const srequre = require('require-from-string');
const {expect} = require('chai');

const make_argv = (input = []) => {
	return ['/node/path', '/script/path'].concat(input);
};

describe('Generate Command', () => {

	
	it('Name argument', () => {
		const output = generate({
			argv:  make_argv(['-n', 'test'])
		});
		const o = srequre(output);
		expect(o).to.be.an('object');
		expect(o).to.have.property('name').equal('test');
	});
	//
	// it('Name argument long', () => {
	// 	let output = require('../lib/generate')({
	// 		argv:  make_argv(['--name', 'test'])
	// 	});
	// 	let o = srequre(output);
	// 	expect(o).to.be.an('object');
	// 	expect(o).to.have.property('name').equal('test');
	// });
	//
	// it('Port argument', () => {
	// 	//let p = make_argv(['-p', '80']);
	// 	let p = make_argv();
	// 	console.log(p);
	// 	let output = require('../lib/generate')({
	// 		argv:  p
	// 	});
	// 	let o = srequre(output);
	// 	console.log(o);
	// 	expect(o).to.be.an('object')
	// 		.to.have.property('vhost')
	// 		.to.be.an('object')
	// 		.to.have.property('port')
	// 		.to.equal('80');
	// });
	//
	// it('Port argument long', () => {
	// 	let output = require('../lib/generate')({
	// 		argv:  make_argv(['--port', '80'])
	// 	});
	// 	let o = srequre(output);
	// 	expect(o).to.be.an('object')
	// 		.to.have.property('vhost')
	// 		.to.be.an('object')
	// 		.to.have.property('port')
	// 		.to.equal('80');
	// });
	//
	// it('Port argument invalid', () => {
	// 	expect(() => {
	// 		generate({
	// 			argv:  make_argv(['--port', 'error'])
	// 		})
	// 	}).to.throw('Port is out of bounds [1-65535] or is not a number')
	// });
	//
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