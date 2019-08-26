const fs = require('fs');

const rs = fs.createReadStream('/var/log/syslog');
const ws = fs.createWriteStream('output.txt');

ws.on('pipe', (source) => {
  console.log('Pipe event: ', source == rs);
  // unpipe desanexa um fluxo gravável anexado anteriormente
  setTimeout(() => {rs.unpipe(ws);}, 15000);
});

rs.pipe(ws);