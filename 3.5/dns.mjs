import dns from 'dns/promises';

const ip = await dns.lookup('gilbut.co.kr');
console.log('IP: ',ip);

const a = await dns.resolve('gilbut.co.kr','A'); //A는 ipv4주소, AAAA는 ipv6 주소, NS(네임서버), SOA(도메인 정보)
console.log('A: ',a);

const mx = await dns.resolve("gilbut.co.kr",'MX'); //메일 서버
console.log("MX: ",mx);

const cname = await dns.resolve("www.gilbut.co.kr",'CNAME'); //별칭, 주로 www가 붙은 주소는 별칭인 경우가 많다
console.log("CNAME",cname);

const any = await dns.resolve("gilbut.co.kr",'ANY');
console.log("ANY",any);
