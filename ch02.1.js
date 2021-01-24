// 변수를 정의하는 새로운 방법:  const, let

// ====================================================================
// 1.1 var가 가진 문제
// ====================================================================
// var의 첫 번째 문제: 함수 스코프
// --------------------------------------------------------------------
// #1. 스코프를 벗어나서 변수를 사용하면 에러 발생
// function example() {
//   var i = 1;
// }
// console.log(i);

// #2. var 키워드 없이 변수를 정의하면 전역 변수 => use strict;
// "use strict";

// function example() {
//   i = 1;
// }

// function example2() {
//   console.log(i);
// }

// example();
// example2();

// #3. for 문을 벗어나도 변수가 사라지지 않는다
//     즉시실행함수 : 함수를 정의하는 시점에 바로 실행되고 사라지는 함수
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("=============");
// console.log(i);

// --------------------------------------------------------------------
// var의 두 번째 문제: 호이스팅
// var로 정의된 변수는 그 변수가 속한 스코프의 최상단으로 끌어올려진다.(hoisting)
// --------------------------------------------------------------------

// #4. 정의되지 않은 변수 사용하기
// console.log(myVar); // ReferenceError: myVar is not defined

// #5. 변수가 정의된 시점보다 먼저 변수 사용하기
// console.log(myVar); // undefined
// var myVar = 1;

// ==>

// #6. 호이스팅의 결과(#5가 이와 동일)
// var  myVar = undefined;
// console.log(myVar);
// myVar = 1;

// #7. 변수가 정의된 시점보다 먼저 변수에 값을 할당하기
// myVar = 1;
// console.log(myVar);
// var myVar = 2;

// --------------------------------------------------------------------
// var의 기타 문제:
// var를 이용하면 한 번 정의된 변수를 재정의할 수 있다
// --------------------------------------------------------------------
// #8. var 변수는 재정의가 가능
// var myVar = 1;
// var myVar = 2;
// console.log(myVar);

// ====================================================================
// 1.2 var의 문제를 해결하는 const, let
// const, let은 블록 스코프다(var는 함수 스코프)
// ====================================================================

// #9. block scope는 block을 벗어나면 변수를 사용할 수 없다.
// if (true) {
//   const i = 0;
// }
// console.log(i); // ReferenceError: i is not defined

// #10. block scope에서 같은 이름을 갖는 변수의 사용
// let foo = "bar1";
// console.log(foo); // bar1

// if (true) {
//   let foo = "bar2";
//   console.log(foo); // bar2
// }
// console.log(foo); // bar1

// #11. 변수가 정의된 시점보다 먼저 변수를 사용할 수 없다.
//      const, let으로 정의된 변수도 호이스팅된다.
//      다만 변수가 정의된 위치와 호이스팅된 위치 사이에서 변수를 사용하려고 하면 에러가 발생한다.
//      이 구간을 임시적 사각지대(temporal dead zone)
// console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
// const foo = 1;

// console.log(foo); // undefined
// var foo = 1;

// const foo = 1;
// {
//   console.log(foo); // 1
// }

// #12. const에서 호이스팅의 역할을 설명하기 위한 예
/*
  @1이 호이스팅되지 않았다면 @2의 값이 @3에서 출력될 것이나
  호이스팅 때문에 @3에서는 @1 변수를 참조해 temporal dead zone 오류 발생
*/
// const foo = 1;       // @2
// {
//   console.log(foo);  // @3 : ReferenceError: Cannot access 'foo' before initialization
//   const foo = 2;     // @1
// }

// #13. var에서 호이스팅의 효과를 확인하는 코드
// var foo = 1;
// (function () {
//   console.log(foo); // undefined
//   var foo = 2;
// })();

// #14. const로 정의된 변수만 재할당 불가능
// #15. const로 정의해도 객체의 내부 속성값은 수정 가능
//      객체의 내부 속성값은 수정 불가능 => immer, immutable.js
//          Object.preventExtensions, Object.seal, Object.freeze

// const bar = { prop1: "a" };
// // bar.prop1 = "b";
// // bar.prop2 = 123;
// // console.log(bar);
// // Object.preventExtensions(bar);
// // Object.seal(bar);
// Object.freeze(bar);
// bar.prop1 = "b";
// bar.prop2 = 123;
// console.log(bar);

// const bar2 = {
//   ...bar,
//   prop1: "b",
//   prop2: 123,
// };
// console.log(bar);
// console.log(bar2);

// const arr = [10, 20];
// arr[0] = 100;
// arr.push(300);

// console.log(arr);

// #16. const로 정의된 변수에 재할당은 불가능
const bar = { prop1: "a" };
bar = { prop2: 123 }; // TypeError: Assignment to constant variable.
console.log(bar);
