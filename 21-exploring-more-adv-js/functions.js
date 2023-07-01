function greetUser(greetingPrefix, userName = 'user') {
  // console.log(greetingPrefix + ' ' + userName);
  console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('Hi', 'Kim');
greetUser('Hello');

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}
const inputNumbers = [1, 2, 10, 4, 15];

console.log(sumUp(...inputNumbers));

console.log(sumUp);
