const count = Number(process.argv[2]);

if (process.argv[2] !== undefined && !Number.isInteger(count)) {
  console.log("Missing number of occurrences");
} else if (process.argv[2] !== undefined && count > 0) {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
