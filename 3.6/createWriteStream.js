const fs = require('fs');
//createWriteStream으로 쓰기 스트림을 만든다
const writeStream = fs.createWriteStream('./writeme2.txt');

writeStream.on('finish',()=>{
    console.log('파일 쓰기 완료');
});
//writeStream에서 제공하는 write 메서드로 넣을 데이터를 쓴다
//데이터를 다 썼다면 end 메서드로 종료를 알린다 이때 finish 이벤트가 발생한다
writeStream.write('이 글을 씁니다\n');
writeStream.write('한 번 더 씁니다');
writeStream.end();
