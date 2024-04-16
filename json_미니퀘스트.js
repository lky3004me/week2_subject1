import readlineSyncModule from 'readline-sync';
import fileSystem from 'fs';
console.log("\n<<json 미니퀘스트>>")
const stringInput1 = '{"name": "kevin.lee (이강윤)", "age": "27", "phone_number": "01092446329"}';
fileSystem.writeFileSync('parsedData.json', stringInput1, 'utf-8');
console.log('parsedData.json 파일이 생성되었습니다.')
let answer = readlineSyncModule.question("delte y/n: ")
if (answer == 'y'){
    fileSystem.unlinkSync('parsedData.json');
    console.log('parsedData.json 파일이 삭제되었습니다.')
}

