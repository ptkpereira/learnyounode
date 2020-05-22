const [a, b, ...numbers] = process.argv;
console.log(numbers.reduce((item, total) => {
  return Number(item) + Number(total);
}))
