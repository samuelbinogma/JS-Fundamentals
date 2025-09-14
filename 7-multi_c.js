const count = Number(process.argv[2]);

if (process.argv[2] !== undefined && (!Number.isInteger(count) || count < 0)) {
  console.log("Missing number of occurrences");
} else if (process.argv[2] !== undefined) {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}