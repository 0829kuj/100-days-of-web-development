// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!
// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

// ~ 한글번역 ~
// JavaScript에 주석을 추가하는 방법입니다
// 주석은 실행되지 않습니다. 주석은 추가 정보를 제공하기 위해 있을 뿐입니다
// 사용자 또는 다른 개발자에게 제공되는 정보

// 연습 시간!

// 1) 세 개의 새 변수를 만듭니다:
// - 선택한 온라인 과정의 이름을 저장하는 변수
// - 해당 코스의 가격을 저장하는 변수
// - 본 코스를 수강할 때 세 가지 주요 목표를 저장하는 변수
let courseName = 'math';
let coursePrice = 1000;
let courseGoals = ['잘하기1', '잘하기2', '잘하기3'];
// 2) 세 가지 변수 값을 출력("경고")
// alert(courseName);
// alert(coursePrice);
// alert(courseGoals);

// 3) 세 변수를 함께 "그룹화"하고 이후에도 값을 출력합니다
let onlineCourse = { name: courseName, price: coursePrice, goals: courseGoals };
console.log(onlineCourse.name);
console.log(onlineCourse.price);
console.log(onlineCourse.goals);

// 4) 또한 "주요 목표" 변수의 두 번째 요소를 출력합니다
alert(onlineCourse.goals[1]);

// 5) 다음을 수행하는 사용자 지정 명령을 추가합니다:
// - "주요 목표" 변수를 사용하고 식별자로 요소에 액세스합니다
// - 콘크리트 식별자 값은 동적/유연성이어야 함
// (즉, 다른 식별자에 대해 명령을 실행할 수 있음)
// - "주요 목표" 변수도 동적이어야 합니다: 명령이 작동해야 합니다
// 임의의 값 목록 포함
// - 사용자 지정 명령은 액세스된 값(즉, 목록 요소)을 제공해야 합니다
function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}
let firstGoal = getListItem(onlineCourse.goals, 0);
// 6) (5)에서 사용자 지정 명령을 실행하고 결과를 출력("경고")합니다
alert(firstGoal);
