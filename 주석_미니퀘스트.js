console.log()
console.log("<<주석 미니퀘스트>>")

const firstNumber = 10;
const secondNumber = 5;
const operator = '+';

let result;

// result = firstNumber(연산자)senondNumber
// 일종의 계산기 
switch (operator) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    default:
        result = '유효하지 않은 연산자입니다.';
}

console.log(`결과: ${result}`);
