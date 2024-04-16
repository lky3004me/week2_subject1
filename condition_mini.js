console.log("<<조건문 미니퀘스트>>")
/*
샌드위치를 만드는 방법
1. 식빵 2조각과 버터 나이프 1개, 딸기잼 1병을 준비한다.
2. 식빵을 가장 넓은 면이 아래로 오도록 접시 위에 담는다.
3. 접시와 닿지 않은 식빵의 가장 넓은 면에 딸기잼을 도포한다. 
여기서 도포라 함은 0.5cm의 두께로 딸기잼이 식빵의 가장 넓은 면을 모두 덮는 것을 의미한다.
4. 이제 딸기잼을 바르지 않은 식빵 한 쪽을 딸기잼을 바른 식빵과 딸기잼이 발려진 부분을 두 쪽이 모두 덮도록 맞닿게한다.
*/

let hour = 3
if (7 <= hour && hour <= 9){
    console.log('아침 식사 시간')
}else if(12 <= hour && hour <= 14){
    console.log('점심 식사 시간')
}else if(18 <= hour && hour <= 20){
    console.log('점심 식사 시간')
}else{
    console.log('식사 금지.')
}

let oper = '*';
switch(oper){
    case '*':
        console.log('곱하기');
        break;
    case '+':
        console.log('더하기');
        break; 
    case '-':
        console.log('빼기');
        break; 
    case '*':
        console.log('나누기');
        break; 
    default:
        console.log('연산기호가 아님');
        break;
}