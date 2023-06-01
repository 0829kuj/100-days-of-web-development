let name = 'kim';
let age = 32;
let hobbies = ['Sports', 'Cooking', 'Reading'];
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
