console.log('console.log...');

module.exports = '!!!find me!!!';

require('./var');

console.log('require.cache....');
console.log(require.cache);
console.log('require.main....');
console.log(require.main === module);
console.log(require.main.filename);
