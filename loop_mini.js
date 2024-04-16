import readlineSyncModule from 'readline-sync';

console.log()
console.log('<<반복문 미니퀘스트>>')
let num1 = readlineSyncModule.question('num_input:');
for(var i = 1; i<10; i++){
    console.log(num1 +'*' + i +'=' + num1*i);
}

for(var i=1; i<10; i+=2){
    let spaces = ' '.repeat((10 - i) / 2);
    let stars = '*'.repeat(i);
    console.log(spaces + stars);
}
