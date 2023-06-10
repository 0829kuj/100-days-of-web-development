// 1번 문제: 선택한 숫자까지의 총합을 구하라. => for 반복문 사용
const calculateBtn = document.getElementById('calculated-sum-btn'); // 계산버튼
const inputUserNumber = document.getElementById('user-number'); // input창
const totalSum = document.getElementById('calculated-sum'); // 결과가 출력될 p태그

let sum = 0;

function calculateSum() {
  const inputrNumber = inputUserNumber.value;
  // console.log(inputrNumber);
  let sumUpToNumber = 0;
  for (let i = 0; i <= inputrNumber; i++) {
    sumUpToNumber += i;
  }
  totalSum.textContent = sumUpToNumber;
  totalSum.style.display = 'block';
}
calculateBtn.addEventListener('click', calculateSum);

// 2번 문제: 모든 a태그에 highlight클래스를 추가하라. => for of 반복문 사용
const highlightLinksBtnElement = document.querySelector('#highlight-links button');

function highlightLinks() {
  const anchorElements = document.querySelectorAll('#highlight-links a');

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
}
highlightLinksBtnElement.addEventListener('click', highlightLinks);

// 3번 문제: user data를 보이게 변경하라.
const dummyUserData = {
  firstName: 'Kim',
  lastName: 'ej',
  age: 28,
};
const displayUserDataBtnElement = document.querySelector('#user-data button');

function displayUserData() {
  const outputDataElement = document.getElementById('output-user-data');
  outputDataElement.innerHTML = ''; // 작업 전 기존항목에 있던 것을 모두 삭제

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement('li');
    const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataBtnElement.addEventListener('click', displayUserData);

// 4번 문제: 주사위를 굴려 특정 숫자가 나오려면 최소 몇번의 주사위가 필요한지 계산하라. => while 반복문
const rollDiceBtnElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // 1~6 사이의 무작위의 수를 구함
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement = document.getElementById('user-target-number');
  const diceRollsListElement = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListElement = document.createElement('li');
    const outputText = 'Roll' + numberOfRolls + ': ' + rolledNumber;

    newRollListElement.textContent = outputText;
    diceRollsListElement.append(newRollListElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceBtnElement.addEventListener('click', deriveNumberOfDiceRolls);
