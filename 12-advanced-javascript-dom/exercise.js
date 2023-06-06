// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

// 연습 시간!

// 1. "DOM에 드릴링"하여 <h1> 요소를 선택하고
// 원하는 이름을 가진 변수에 저장
let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0]; // 둘 다 동일한 코드
console.dir(h1Element);

// 2. (1)의 변수를 사용하여 "부모"에 접근합니다
// 저장된 <h1> 요소의 요소(즉, <본체> 요소)
console.dir(h1Element.parentElement);

// 보너스: (1)의 변수를 사용하여 액세스합니다
// 형제 요소(즉, <h1> 요소 옆에 있는 <p> 요소)
console.dir(h1Element.nextElementSibling);
// 3. getElementById로 <h1> 요소를 선택하고 저장합니다
// 동일한 변수 또는 새 변수(사용자에 따라 다름)
let h1Element02 = document.getElementById('titleText');
console.dir(h1Element02);
// 4. querySelector를 사용하여 두 번째 <p> 요소를 선택합니다(가능)
// HTML 코드에 무언가를 추가해야 합니다(예: 클래스)
// 선택한 이름으로 새 변수에 저장합니다
let secondPteg = document.querySelector('.secondPteg');
console.dir(secondPteg);
// 5. 보너스 과제: <p> 요소의 텍스트 내용 변경 시도
// (4)에서 선택하고 선택한 다른 텍스트로 설정합니다
secondPteg.textContent = '변경된 text!!';
