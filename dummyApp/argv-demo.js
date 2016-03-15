/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

process.argv.forEach(function(value, index, args) {
    console.log('process.argv[' + index + '] = ' + value);
});

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

