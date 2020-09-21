
const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt'); //readme4를 읽어서
const writeStream = fs.createWriteStream('writeme3.txt'); //writeme3에 저장
readStream.pipe(writeStream);
