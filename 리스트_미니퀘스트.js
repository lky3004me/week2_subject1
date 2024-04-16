
console.log('\n<<리스트 미니퀘스트>>')
const numbers1 = [1, 2, 3, 4, 5];
let sum = 0;
for(var i = 0; i<numbers1.length; i++){
    sum += i;

    console.log(`현재합계: ${sum} (${i}를 더함)`);
}
console.log(`최종 합계: ${sum}`);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = 0
for(let i = 0 ; i<numbers2.length; i++){
    if(numbers2[i]%2 == 0){
        sum += numbers2[i]
        console.log(`짝수 발견:${sum}`)
    }
}

console.log('\n<<함수 미니퀘스트>>')
const gugu = () =>{
    for(let i =1; i<9; i++){
        for(let j =1; j<9; j++){
            console.log(`${i} * ${j} = ${i*j}`)
        }
    }
}
gugu();

function computor(input1, input2 , oper){
    console.log(`첫 번째 숫자 : ${input1}`)
    console.log(`연산자 : ${oper}`)
    console.log(`첫 번째 숫자 : ${input2}`)

    if (oper == '+'){
        console.log(`${input1} ${oper} ${input2} = ${input1 + input2}`)
    }else if(oper == '-'){
        console.log(`${input1} ${oper} ${input2} = ${input1 - input2}`)

    }else if(oper == '*'){
        console.log(`${input1} ${oper} ${input2} = ${input1 * input2}`)
    }else if(oper == '/' && input2 != 0){
        console.log(`${input1} ${oper} ${input2} = ${input1 / input2}`)
    }else{
        console.log("something is wrong")
    }
}

computor(1,0, '/');
