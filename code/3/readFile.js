const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => { //파일 읽기
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
