
const timeout = setTimeout(() => { //1.5초
  console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => { //1초, 2초, 2.5초 취소
  console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => { //3초, 2.5초 취소
  console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => { //2.5초
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => { //0초
  console.log('즉시 실행');
});

const immediate2 = setImmediate(() => { //0초, 0초 취소
  console.log('실행되지 않습니다');
});

clearImmediate(immediate2); //0초
