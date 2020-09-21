
const { odd, even } = require('./var'); //모듈 넘겨받기
//구조분해할당
//const value=require('./var');
//const odd=value.odd;
//const even=value.even;

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven; //모듈 넘겨주기
