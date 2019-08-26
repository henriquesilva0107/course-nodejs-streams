const fs = require('fs');

const ws = fs.createWriteStream('big.txt');

const isDrained = ws.write('some data', 'utf8', () => {
  console.log('write is done');
});

console.log(isDrained);