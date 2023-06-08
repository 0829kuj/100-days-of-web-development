// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

// 배운 것을 연습하세요!

// 1) 두 개의 <button> 요소를 선택하여 두 개의 다른 변수에 저장합니다.
// - "id"를 추가하거나 사용하지 않고 첫 번째 버튼을 선택합니다
// - "id"를 사용하여 두 번째 버튼을 선택합니다
// 2) 두 버튼 모두에 "click" 이벤트 수신기를 추가합니다(두 가지 다른 기능 포함).
// 기능은 클릭한 버튼을 "console.dir()"해야 합니다.
// - 저장된 변수를 사용하여 첫 번째 버튼을 출력합니다
// - 저장된 변수를 사용하지 않고 두 번째 버튼을 출력합니다
// 3) 이제 페이지에 표시된 텍스트에 언급된 단락을 선택하여 저장합니다
// (첫 번째와 세 번째 단락)
// - 문서를 드릴로 천공하고 언급된 요소로 "이동"하여 두 단락을 모두 선택합니다
// - DOM 시추에 어려움을 겪고 있다면 "ids"를 대신 사용하되 해결책을 지켜보세요!
// 4) (2)의 기능을 다음과 같이 변경합니다:
// - 첫 번째 버튼은 세 번째 단락(즉, 앞의 <p>)을 제거합니다
// - 두 번째 버튼을 누르면 첫 번째 단락의 배경색이 파란색으로 바뀝니다
// 5) "인라인 스타일"을 변경하고 CSS 클래스를 추가하여 (4)를 모두 해결합니다
// 참고: 먼저 styles.css 파일에 해당 클래스를 추가해야 합니다

const removeBtn = document.querySelector('button');
// console.log(removeBtn.textContent);
const backgroundColorChangeBtn = document.getElementById('backgroundColorChangeBtn');
// console.log(backgroundColorChangeBtn.textContent);

// const firstParagraphElement = document.querySelector('section p:nth-child(4)');
const firstParagraphElement = document.body.children[2].children[1];

const tghirdParagraphElement = firstParagraphElement.nextElementSibling.nextElementSibling;

function clickRemoveBtn() {
  tghirdParagraphElement.remove();
  // console.dir(removePteg.textContent);
}

function changeBackgroundColor() {
  // firstParagraphElement.style.backgroundColor == 'skyblue'
  const elementClassName = firstParagraphElement.className;
  console.log(firstParagraphElement.className);
  if (elementClassName == 'blue-bg') {
    firstParagraphElement.className = '';
  } else {
    firstParagraphElement.className = 'blue-bg';
  }
}

removeBtn.addEventListener('click', clickRemoveBtn);
backgroundColorChangeBtn.addEventListener('click', changeBackgroundColor);
