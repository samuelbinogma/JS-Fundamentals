function add(a, b) {
  return parseInt(a) + parseInt(b);
}

const firstNum = process.argv[2];
const secondNum = process.argv[3];

console.log(add(firstNum, secondNum));