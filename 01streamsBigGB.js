const fs = require('fs');
const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  const rs = fs.createReadStream('big.txt');
  rs.pipe(socket);
});

server.on('error', (err) => console.error(err));

server.listen(8000, () => console.log('Server Running'));