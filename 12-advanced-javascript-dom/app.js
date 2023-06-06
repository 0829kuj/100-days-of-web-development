console.dir(document);
// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-link');
anchorElement.href = 'https://www.naver.com/';

// html객체에 새로운 요소 추가하기
// 1. 새로운 객체 생성
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = '  This leads to Google!';

// 2. 부모요소에 접근
let firstParagraph = document.querySelector('p');

// 3. 부모요소 컨텐츠에 요소 추가
firstParagraph.append(newAnchorElement);

// html객체의 요소 삭제하기
// 1. 삭제할 요소 선택
let firstH1Element = document.querySelector('h1');

// 2. 요소 삭제
// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);

// 요소이동
firstParagraph.parentElement.append(firstParagraph);
console.log('textContent: ' + firstParagraph.textContent);
console.log('innerHTML: ' + firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>.';

// 클릭이벤트
let paragraphElement = document.querySelector('p:nth-child(2)');

function changePragraphTest(event) {
  paragraphElement.textContent = 'Clicked!';
  console.log('paragraph clicked!');
  console.log(event);
}
paragraphElement.addEventListener('click', changePragraphTest);

// input태그 키입력이벤트
let inputElement = document.querySelector('input');

function retriedveUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  console.log(enteredText);
  // console.log(event);
}
inputElement.addEventListener('keydown', retriedveUserInput);
