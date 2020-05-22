const fs = require('fs');

const path = process.argv[2];

const data = fs.readFileSync(path);
const str = data.toString();
const strArr = str.split('\n');
console.log(strArr.length-1);
