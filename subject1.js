import readlineSyncModule from 'readline-sync';
import fileSystem from 'fs';

console.log('<<예외처리 미니퀘스트>>')
const applyDiscount = (age) => {
    if (age < 0 ){
        return '올바른 나이를 입력하세요.'
    }
    else if(age < 20){
        return '20% 미성년자 할인이 적용됩니다.'
    }
    return '성인입니다.'
  };

  console.log(applyDiscount(readlineSyncModule.question('input: ')))