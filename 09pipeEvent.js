const fs = require('fs');

const rs = fs.createReadStream('/var/log/syslog');
const ws = fs.createWriteStream('output.txt');

ws.on('pipe', (source) => {
  console.log('Pipe event: ', source == rs);
});

rs.pipe(ws);