
setInterval(() => {
  console.log('시작');
  try { //에러가 발생해도 계속 실행됨
    throw new Error('서버를 고장내주마!');
  } catch (err) {
    console.error(err);
  }
}, 1000);
