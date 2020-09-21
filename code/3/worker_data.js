
const {
  Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) { // 부모일 때
  const threads = new Set(); //중복없는 배열 Set
  threads.add(new Worker(__filename, {
    workerData: { start: 1 },//worker1
  }));
  threads.add(new Worker(__filename, {
    workerData: { start: 2 },//worker2
  }));
  for (let worker of threads) {
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => {
      threads.delete(worker); //끝난 worker 삭제
      if (threads.size === 0) { //worker가 0이면 끝
        console.log('job done');
      }
    });
  }
} else { // 워커일 때
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
