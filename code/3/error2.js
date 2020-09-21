
const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => { //콜백 에러정의
    if (err) {
      console.error(err);
    }
  });
}, 1000);
