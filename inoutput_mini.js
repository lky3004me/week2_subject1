import readlineSyncModule from 'readline-sync';


console.log('\n<<입력과 출력 미니퀘스트>>')
let userInput1 = readlineSyncModule.question();
console.log(userInput1);

let isCorrect = false;
let userInput2 = readlineSyncModule.question();
userInput2 = userInput2.trim();
let compString = 'war'
if (userInput2 == compString){
    isCorrect = true;
}else{
    isCorrect = false;
}

if (isCorrect){
    console.log('O')
}else{
    console.log('x')
}
