function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const num = Number(process.argv[2]);
const input = Number.isNaN(num) ? NaN : Math.floor(num);

console.log(factorial(input));