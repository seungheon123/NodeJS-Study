//단방향 암호화는 복호화 할 수 없는 암호화 방식이다. 즉, 암호화된 문자열을 원래 문자열로 되될려놓을 수 없는 것을 의미한다.
//복호화 할 수 없으므로 암호화라고 표현하는 대신 해시 함수라고 부르기도 한다

const crypto = require('crypto');
console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base62: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

//createHash(알고리즘): md5, sha1, sha256, sha512등이 가능하지만 md5와 sha1은 취약점이 발견되었다.
//update(문자열): 변환할 문자열을 넣는다
//digest(인코딩): 인코딩할 알고리즘을 넣는다. base64, hex, latin1이 주로 사용되는데 base64 결과 문자열이 가장 짧다.