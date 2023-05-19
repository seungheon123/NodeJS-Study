const {Worker, isMainThread, parentPort, } = require('worker_threads');

if(isMainThread){ //부모일 때
    const worker = new Worker(__filename); //같은 디렉토리에 워커를 생성
    worker.on('message', (message) =>console.log('from worker',message));
    worker.on('exit', ()=>console.log('worker exit')); //parentPort.close()가 일어나면 이벤트 발생
    worker.postMessage('ping'); //부모에서 워커로 메세지를 보낸다
}else{//워커일 때
    parentPort.on('message',(value)=>{ //parentPort.on(메세지)로 부모로부터 메세지를 받고
        console.log('from parent',value);
        parentPort.postMessage('pong'); //postMessage로 데이터를 보낸다
        parentPort.close(); //워커 스레드 종료라고 메인 스레드에 알려줘야 exit 이벤트 발생
    });
};