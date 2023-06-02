let name = 'kim';
let age = 32;
let hobbies = ['Sports', 'Cooking', 'Reading', 'Codding'];
let job = {
  title: 'Developer',
  place: 'New York',
  salary: 50000,
};
let jobTitle;

console.log(hobbies);
console.log(hobbies[2]);
console.log(job.salary);

let adultYears;
function calculateAdultYears(userAge) {
  return userAge - 18;
}

age = 48;
// let adultYears = age - 18;
adultYears = calculateAdultYears(age);
console.log(adultYears);

let person = {
  name: 'kim', // 속성(Property)
  greet() {
    // 메서드(Method)
    alert('Hello!');
  },
};
person.greet;

console.log(name.length);
console.log(name.toUpperCase());
console.log(hobbies.length);
