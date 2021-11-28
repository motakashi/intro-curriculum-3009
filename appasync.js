'use strict';
const fs = require('fs');

const fileName = './test.txt';

function promiseAppendFile(str){
  return new Promise((resolve, rejects) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

async function main(){
  for (let count = 0; count < 30; count++) {
  await promiseAppendFile('おはようございます\n');
  await promiseAppendFile('こんにちは\n');
  await promiseAppendFile('こんばんは\n');
  }
}

main();