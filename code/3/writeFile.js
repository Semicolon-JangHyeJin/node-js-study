
const fs = require('fs');

fs.writeFile('code/3/writeme.txt', 'write file: hello~', (err) => { //파일 생성
  if (err) {
    throw err;
  }
  fs.readFile('code/3/writeme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});
