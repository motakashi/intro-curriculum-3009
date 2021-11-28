'use strict';
const fs = require('fs');

const fileName = './test.txt';

function promiseAppendFile(str){
  return new Promise((resolve, rejects) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
for (let count = 0; count < 30; count++) {
  promiseChain = promiseChain
  .then(() => {
    return promiseAppendFile('おはようございます\n');
  })
  .then(() => {
    return promiseAppendFile('こんにちは\n');
  })
  .then(() => {
    return promiseAppendFile('こんばんは\n');
  })
}