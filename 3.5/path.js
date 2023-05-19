//path 모듈은 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈이다
//운영체제 별로 경로 구분자가 다르기 때문에 필요하다
//윈도 타입은 \로 구분하고 POSIX 타입은 /로 구분한다.

const path = require('path');
const string = __filename;

console.log('path.sep: ',path.sep); //경로의 구분자이다. 윈도는 \, POSIX는 /이다
console.log('path.delimiter: ',path.delimiter); // 환경 변수의 구분자이다. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있다.
console.log('---------------------------------');
console.log("path.dirname(): ",path.dirname(string)); //파일이 위차한 폴더를 보여준다
console.log('path.extname(): ', path.extname(string)); //파일의 확장자를 보여준다
console.log('path.basename(): ',path.basename(string)); //파일의 이름(확장자 포함)을 표시한다
console.log("path.basename() - extname: ",path.basename(string, path.extname(string))); //파일의 이름만 표시하고 싶으면 basename의 두 번째 인수로 파일의 확장자를 넣으면 된다
console.log('---------------------------------');
console.log('path.parse(): ',path.parse(string)); //파일의 경로를 root, dir, base, ext, name으로 구분한다
console.log('path.format(): ',path.format({ //path.parse()한 객체를 파일 경로로 합친다
    dir:'C:\\Users\\Lenovo\\OneDrive\\바탕 화면\\경희대학교\\내폴더\\Node.js (2)\\3.5',
    name: 'path',
    ext: '.JS',
}));
// /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 반환한다
console.log('path.normalize(): ',path.normalize('C:\Users\\\\Lenovo\\OneDrive\\바탕 화면\\경희대학교\\내폴더\\Node.js (2)\\3.5'));
console.log('---------------------------------');
console.log('path.isAbsolute(C:\\): ',path.isAbsolute('C:\\')); //파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알린다.
console.log('path.isAbsoulte(./home)',path.isAbsolute('./home'));
console.log('---------------------------------');


