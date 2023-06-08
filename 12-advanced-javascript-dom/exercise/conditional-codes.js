// const myName = 'kim';
const myName = document.getElementById('product-name');
console.log(myName);

function nameCheck(event) {
  const inputName = event.target.value;
  if (inputName == 'kim') {
    console.log('Hello ~');
  }
}
myName.addEventListener('keydown', nameCheck);

let isLoggedIn = true;

if (!isLoggedIn) {
  console.log('User is NOT logged in!');
}

const enteredUserName = 'kim';

if (enteredUserName.length) {
  console.log('Input is valid!');
}
