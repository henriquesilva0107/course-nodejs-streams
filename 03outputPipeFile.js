const fs = require('fs');

const rs = fs.createReadStream('big.txt');

rs.pipe(process.stdout);