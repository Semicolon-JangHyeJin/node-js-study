
const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('event 1');
});
myEvent.on('event2', () => {
  console.log('event 2');
});
myEvent.on('event2', () => {
  console.log('event 2 ++');
});
myEvent.once('event3', () => { //한번만 실행
  console.log('event 3');
}); // 한 번만 실행됨

myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2'); // 이벤트 호출

myEvent.emit('event3');
myEvent.emit('event3'); // 실행 안 됨

myEvent.on('event4', () => {
  console.log('event 4');
});
myEvent.removeAllListeners('event4'); //모든 listener를 지움
myEvent.emit('event4'); // 실행 안 됨

const listener = () => {
  console.log('event 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener); //listener하나만 지움
myEvent.emit('event5'); // 실행 안 됨

console.log(myEvent.listenerCount('event2'));
