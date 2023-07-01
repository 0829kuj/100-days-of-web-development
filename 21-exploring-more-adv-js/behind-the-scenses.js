const hobbies = ['Sports', 'Cooking'];
const age = 32;

hobbies.push('Reading');

// hobbies = ['Coding', 'Sleeping']; 배열을 재선언 할 경우 주소값이 바뀌기 때문에 불가능

console.log(hobbies);

const person = { age: 33 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  // return p.age - 18;
}

console.log(getAdultYears({ ...person }));
console.log(person);
