const fs = require('fs');

const rs = fs.createReadStream('/var/log/syslog');
const ws = fs.createWriteStream('output.txt');

rs.on('end', () => { console.log('end event read stream'); ws.end('web finish'); });
// O end event não é chamado do writeStream porque o programa
// é finalizado no end event do readStream, para arrumar isso
// utilize o finish event no writeStream
ws.on('finish', () => console.log('finish event for write stream'));

rs.pipe(ws);