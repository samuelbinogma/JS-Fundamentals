function factorial(n) {
  if (Number.isNaN(n) || n < 0 || n === 0) return 1;
  return n * factorial(n - 1);
}

const num = Number(process.argv[2]);
const input = Math.floor(num);

console.log(factorial(input));