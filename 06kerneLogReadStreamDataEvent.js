const fs = require('fs');

const rs = fs.createReadStream('/var/log/kern.log');

rs.setEncoding('utf8');
let totalChunks = 0;

rs.on('data', (chunk) => {
  console.log(chunk);
  totalChunks++;
});

rs.on('end', () => {
  console.log(`\n\ntotal chunks ${totalChunks} end read file >> ${new Date()}`);
});

rs.on('error', (err) => console.error(err));