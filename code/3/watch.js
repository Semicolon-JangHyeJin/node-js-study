//파일 감시
//파일 변경 사항이 발생하면 이벤트 호출

const fs = require('fs');

fs.watch('./target.txt', (eventType, filename) => {
  console.log(eventType, filename);
});
