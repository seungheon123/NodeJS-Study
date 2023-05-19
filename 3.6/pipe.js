const fs = require('fs');

fs.writeFile('./readme4.txt','저를 wrtieme3.txt로 보내주세요.',(err)=>{
    if(err) throw err;
})

const readStream = fs.createReadStream('./readme4.txt');
const writeStream = fs.createWriteStream('./writeme3.txt');
readStream.pipe(writeStream);