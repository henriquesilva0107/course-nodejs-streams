const fs = require('fs');

const rs = fs.createReadStream('temp.txt');
const ws = fs.createWriteStream(Date.now()+'.txt');

rs.pipe(ws);