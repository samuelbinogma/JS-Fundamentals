const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (firstArg === undefined || secondArg === undefined) {
  console.log("No argument");
} else {
  console.log(`${firstArg} is ${secondArg}`);
}