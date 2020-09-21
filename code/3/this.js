
console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
  console.log('function', this === exports, this === global);
    //함수 내부의 this는 global 객체
}
whatIsThis();
