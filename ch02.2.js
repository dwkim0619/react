// ====================================================
// 객체와 배열의 사용성 개선
/*
    단축 속성명
    계산된 속성명
    전개 연산자
    비구조화 할당(destructuring assignment)
*/
// ====================================================

// #17. 단축 속성명을 사용해 객체 생성
/*
    객체 속성값의 일부가 이미 변수로 존재하면 간단하게 변수 이름만 추가(@1)
    속성값이 함수면 function 키워드 없이 함수명만 추가(@2)
*/
// const name = "mike";
// const obj = {
//   age: 21,
//   name, // @1
//   getName() {
//     // @2
//     return this.name;
//   },
// };

// console.log(obj);
// console.log(obj.getName());

// #19 콘솔 로그 출력시 단축 속성명 활용
// const name = "mike";
// const age = 21;

// console.log("name = ", name, ", age = ", age);
// console.log({ name, age });

// #20. 계산된 속성명을 사용하지 않은 코드와 사용한 코드
/*
    계산된 속성명(computed property names)은 객체의 속성명을 동적으로 결정
*/
// function makeObject1(key, value) {
//   const obj = {};
//   obj[key] = value;
//   return obj;
// }
// function makeObject2(key, value) {
//   return { [key]: value };
// }

// console.log(makeObject1("name", "mike"));
// console.log(makeObject2("name", "mike"));

// #21. 계산된 속성명을 사용해 컴포넌트 상태값 변경
// class MyComponent extends React.Component {
//   state = {
//     count1: 0,
//     count2: 0,
//     count3: 0,
//   };
//   // ...
//   onClick = (index) => {
//     const key = `count${index}`;
//     const value = this.state[key];
//     this.setState({ [key]: value + 1 });
//   };
// }

// #22. 전개 연산자를 이용해 함수 매개변수 입력
// 전개 연산자(spread operator)는 배열이나 객체의 모든 속성을 풀어놓을 때 사용
// const max1 = Math.max(1, 3, 7, 9);
// console.log(max1);
// const max2 = Math.max(...[1, 3, 7, 9]);
// console.log(max2);

// #23. 전개 연산자를 이용해 배열과 객체 복사
// const arr1 = [1, 2, 3];

// const arr2 = [...arr1]; // 새로운 객체 생성, 값 복사
// arr2[0] = 100;
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// const arr3 = arr1; // 참조 복사
// arr3[0] = 999;
// console.log("arr1 : ", arr1);
// console.log("arr3 : ", arr3);

// const obj1 = { name: "mike", age: 21 };

// const obj2 = { ...obj1 };
// obj2.age = 90;
// console.log(obj1);
// console.log(obj2);

// const obj3 = obj1;
// obj3.age = 90;
// console.log(obj1);
// console.log(obj3);

// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth()); // 0 ~ 11
// console.log(now.getDate()); // 1 ~ 31
// console.log(now.getDay()); // 0 ~ 6 (일 ~ 토)
// // console.log(new Date());
// console.log(new Date(2021, 0, 25, 15, 10, 0));
// console.log(new Date(2021, 0, 32));
// console.log(new Date([2021, 1, 26]));
// console.log(new Date(...[2021, 1, 26]));

// #26. 전개 연산자를 이용해 두 객체를 병합하기
// const obj1 = { age: 21, name: "mike" };
// const obj2 = { hobby: "soccer" };
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// #27. 객체 리터럴에서 중복된 속성명 사용
// 중복시 마지막 속성명 값 적용
// const obj1 = { x: 1, x: 2, y: "a" };
// console.log(obj1);
// const obj2 = { ...obj1, y: "b" };
// console.log(obj2);

// 배열 비구조화(array destructuring)
// 배열의 여러 속성값을 변수로 쉽게 할당

// #28
// const arr = [1, 2];
// const [a, b] = arr;
// console.log(a);
// console.log(b);

// #29. 이미 존재하는 변수에 값 할당
// const [c, d] = arr;
// let c, d;
// [c, d] = arr;
// console.log(c);

// #30. 기본값
// const arr = [1];
// const [a = 10, b = 20] = arr;
// console.log([a, b]);

// #31. 두 값 교환
// let a = 1;
// let b = 2;
// console.log({ a, b });
// [a, b] = [b, a];
// console.log({ a, b });

// #32. 쉼표를 이용해 일부 값 건너뛰기
// const arr = [1, 2, 3];
// const [a, , c] = arr;
// console.log({ a, c });

// #33. 나머지 값을 별도의 배열로 만들기
// const arr = [1, 2, 3];
// const [first, ...rest] = arr;
// console.log({ first, rest });

// #34. 객체 비구조화, 속성명, 별칭사용
// const obj = { age: 21, name: "mike" };
// const { name, age } = obj;
// console.log(name);
// console.log(age);

// const { a, b } = obj;
// console.log({ a, b });

// const { name: a, age: b } = obj;
// console.log({ a, b });

// #37. 기본값, 별칭사용, 나머지 속성
// const obj = { age: undefined, name: undefined, grade: "A" };
// const { age: theAge = 20, name = "unknown", grade = "F" } = obj;
// console.log({ theAge, name, grade });

// const obj2 = { age: 21, name: "mike", grade: "A" };
// const { age, ...rest } = obj2;
// console.log(rest);
// console.log({ age, rest });
// console.log({ age, ...rest });

// #41. for문 비구조화 활용
// const people = [
//   { age: 21, name: "mike" },
//   { age: 51, name: "sara" },
// ];
// for (const { age, name } of people) {
//   console.log({ name, age });
// }

// #42. 중첩된 객체의 비구조화 사용
// const obj = { name: "mike", mother: { name: "sara" } };
// const {
//   name,
//   mother: { name: motherName },
// } = obj;

// console.log({ name, motherName });
// console.log({ name, mother }); // ReferenceError: mother is not defined

// #43. 기본값은 변수 단위가 아니라 패턴 단위로 적용
// const [{ prop: x } = { prop: 123 }] = [];
// console.log(x);
// const [{ prop: x } = { prop: 123 }] = [{}]; // 배열의 첫 요소가 존재해 기본값 할당 안됨, 첫 요소에 prop 속성이 없어 x에 undefined 할당
// console.log(x); // undefined

// #44. 계산된 속성명 사용
// const index = 1;
// const { [`key${index}`]: valueOfTheIndex } = { key1: 123 };
// console.log(valueOfTheIndex);

// #45. 별칭을 이용해 다른 객체와 배열의 속성값 할당
const obj = {};
const arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
console.log(obj);
console.log(arr);
