const fs = require('fs');
console.log("시작");
//readFile 대신 readFileSync메서드를 사용하여 동기처리를 할 수 있다
//Sync 메서드를 사용할 때는 이전 작업이 완료되어야 다음 작업을 진행할 수 있다
let data = fs.readFileSync('./readme2.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번',data.toString());
console.log("끝");
