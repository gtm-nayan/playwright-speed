import { createServer } from 'node:http';

createServer((req, res) => {
	let i = +req.headers['x-test-id'];
	console.warn('received request', i);
	setTimeout(() => {
		res.writeHead(200, { 'Content-Type': 'text/plain' }).end('Hello World ' + i++ + '.');
	}, 500);
}).listen(4173);
