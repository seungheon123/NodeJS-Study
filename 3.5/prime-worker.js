const {
    Worker, isMainThread, parentPort, workerData
} = require("worker_threads");

const min = 2;
const max = 10000000;
let primes = [];

function findPrimes(start,range){
    let isPrime = true;
    const end = start + range;
    for(let i = start; i<end; i++){
        for(let j = min; j<Math.sqrt(end); j++){
            if(i!==j && i%j===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i);
        }
        isPrime= true;
    }
}

if(isMainThread){
    const threadCount = 8;
    const threads = new Set();
    const range = Math.floor((max-min)/threadCount); //1000000(max)를 8개의 쓰레드에 분배를 해서 처리하기 위해

    let start = min;
    console.time('prime');

    for(let i =0; i<threadCount-1; i++){
        const wStart = start;
        threads.add(new Worker(__filename,{workerData : {start:wStart,range:range}}));
        start +=range;
    }
    //7개만 for문을 돌고 마지막 워커는 특별해서 따로 지정
    threads.add(new Worker(__filename,{workerData: {start: start, range: range+((max - min +1)%threadCount)}}));

    for(let worker of threads){
        worker.on('error',(err)=>{
            throw err;
        });
        worker.on('exit',()=>{
            threads.delete(worker);
            if(threads.size === 0){
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on('message',(msg)=>{
            primes = primes.concat(msg);
        });
    }
}else{
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}