//예측 불가능한에러 처리
process.on('uncaughtException', (err) => { //uncaughtException이 모든 에러를 처리함
  console.error('예기치 못한 에러', err); //에러 기록을 하되 에러 복구 코드를 작성하는것은 아님
});

setInterval(() => {
  throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
  console.log('실행됩니다');
}, 2000);
