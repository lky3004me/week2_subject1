import readlineSyncModule from 'readline-sync';


console.log('\n<<입력과 출력 미니퀘스트>>')
let userInput1 = readlineSyncModule.question();
console.log(userInput1);

let isCorrect = false;
let userInput2 = readlineSyncModule.question();
userInput2 = userInput2.trim();
let compString = 'correct'
console.log(userInput2)
if (userInput2 == compString){
    console.log('정답입니다.');
}else{
    console.log('실패입니다.');
}
