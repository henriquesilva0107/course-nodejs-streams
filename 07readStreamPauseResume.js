const fs = require('fs');

const rs = fs.createReadStream('/var/log/kern.log');

rs.on('data', (function(lentgthNow) {
  return (chunk) => {
    lentgthNow += chunk.length;
    console.log("Length now: ", lentgthNow);
    rs.pause();
    setTimeout(() => rs.resume(), 1000);
  }
})(0));

rs.on('end', () => {
  console.log('end event');
});
