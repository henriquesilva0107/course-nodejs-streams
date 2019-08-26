const fs = require('fs');

const rs = fs.createReadStream('big.txt');
rs.setEncoding('utf8');

const read = (stats) => {
  return function () {
    console.log(stats.dataRead)
    let chunk;
    console.log("Count : ", stats.count++);
    while (null !== (chunk = this.read())) {
      stats.dataRead += chunk.length;
      console.log("Length: ", chunk.length);
    }
  };
};

rs.on('readable', read({ count:0, dataRead: 0 }));
rs.on('end', () => console.log('end event'));