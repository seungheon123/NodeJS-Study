const fs = require('fs');
console.log('시작');
//비동기 방식으로 하되 순서를 유지하고 싶으면 readFile의 콜백에 다음 readFile을 넣으면 된다.
//콜백 지옥이 펼쳐진다
fs.readFile('./readme2.txt',(err,data)=>{
    if(err) throw err;
    console.log('1번',data.toString());
    fs.readFile('./readme2.txt',(err,data)=>{
        if(err) throw err;
        console.log('2번',data.toString());
        fs.readFile('./readme2.txt',(err,data)=>{
            if(err) throw err;
            console.log('3번',data.toString());
            console.log('끝');
        });
    });
});