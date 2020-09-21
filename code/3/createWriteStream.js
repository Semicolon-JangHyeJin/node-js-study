//스트림을 이용한 파일쓰기
const fs = require('fs');

const writeStream = fs.createWriteStream('code/3/writeme2.txt');
writeStream.on('finish', () => {
  console.log('write... finish');
});

writeStream.write('write and write.\n'); //첫번째 버퍼
writeStream.write('one more write.'); //두번째 버퍼
writeStream.end();
