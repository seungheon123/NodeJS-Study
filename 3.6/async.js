const fs = require('fs');
console.log('시작');
//비동기 메서드들은 백그라운에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어간다
fs.readFile('./readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log("1번",data.toString());
});
fs.readFile('./readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log("2번",data.toString());
});
fs.readFile('./readme2.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log("3번",data.toString());
});

console.log("끝");