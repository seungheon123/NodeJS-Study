const url = require('url');
const { URL } = url;
const myURL = new URL('http://www.naver.com');
console.log('new URL(): ',myURL);
console.log(myURL.hostname);
console.log('url.format(): ',url.format(myURL));