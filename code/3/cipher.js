
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456'; //32바이트
const iv = '1234567890123456'; //16바이트

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('helloABC', 'utf8', 'base64');
result += cipher.final('base64');
console.log('result:', result); //암호화

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('string:', result2); //복호화
