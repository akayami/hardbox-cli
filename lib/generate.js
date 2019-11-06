const program = require('commander');
const v = require('validator');

module.exports = (p) => {
	program
		.version('0.0.1')
		.option('-n --name [name]', 'Specify name of this vhost')
		.option('-p --port [port]', 'Specify port')
		.option('-r --protocol [protocol]', 'Specify protocol (http or https)')
	//		.option('-t --target [target]', 'Specify the target endpoint')
		.option('-d --domainName [domain]', 'Specify the domain name')
		.option('-l --path [path]', 'Specify the `path`')
	;
	
	program.parse(p.argv);

	// Long work around a bug in commander regarding usage of name
	
	const name = (program.name && typeof program.name == 'string' ? program.name : false) || 'name';
	const protocol = program.protocol || 'http';
	if (protocol !== 'http' && protocol !== 'https') {
		throw new Error('Invalid protocol requested. Only http and https are supported');
	}
	const port = program.port || 80;
	
	if (!v.isPort(String(port))) {
		throw new Error('Port is out of bounds [1-65535] or is not a number');
	}
	
	const domain = program.domainName || 'domain.local';
	
	//	let target = program.target || 'http://localhost:8080';
	
	const path = program.path || '/';
	
	
	return `
module.exports = {
	name: '${name}',
	vhost: {
		protocol: '${protocol}',
		domain: '${domain}',
		port: '${port}',
		pathname: '${path}'
	},
	morgan: {
		format: 'tiny',
		options: {}
	},
	modules: []
}
`;
};