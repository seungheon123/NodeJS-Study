const fs = require('fs')
//createReadStream으로 읽기 스트립을 만든다.
//첫 번째 인수로 읽을 파일 경로를 넣는다
//두 번쨰 인수는 옵션 객체인데, highWaterMark라는 옵션이 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션이다. 기본값은 64kB이다.
const readStream = fs.createReadStream('./readme3.txt',{highWaterMark:16});
const data = [];

//readStream은 이벤트 리스너를 붙여서 사용한다. 보통 data, end, error 이벤트를 사용한다
//파일을 읽기 시작하면 data 이벤트가 호출된다
readStream.on('data',(chunk)=>{ //파일의 크기를 16KB로 설정했기에 16KB보다 크다면 여러번 발생할 수 있다
    data.push(chunk);
    console.log('data : ',chunk, chunk.length);
});
//파일을 다 읽으면 end 이벤트가 발생한다
readStream.on('end',()=>{
    console.log('end : ',Buffer.concat(data).toString()); //파일을 다 읽었으면 BUffer.concat으로 합쳐서 다시 문자열로 만든다
});
//파일을 읽는 도중 에러가 발생하면 error 이벤트가 호출된다
readStream.on('error',(err)=>{
    console.log('error : ',err);
});