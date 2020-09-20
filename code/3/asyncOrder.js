//비동기 방식 & 순서대로 출력
//이전 readFile의 콜백에 다음 readFile을 넣기
const fs = require('fs');

console.log('start');
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('first', data.toString());
  fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('second', data.toString());
    fs.readFile('./readme2.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('third', data.toString());
      console.log('end');
    });
  });
});
