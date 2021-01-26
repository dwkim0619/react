/*
 Promise.all : 여러 개의 프로미스를 병렬로 처리
   then 메서드 체인을 연결하면 각각의 비동기 처리가 병렬로 처리되지 않음
   입력되는 배열에 프로미스가 아닌 값을 넣으면, 그 값 그대로 이행됨 상태인 프로미스처럼 처리

 Promise.race : 여러 개의 프로미스 중 가장 빨리 처리된 프로미스를 반환

*/

// requestData가 3초 안에 데이터를 받으면 then 아니면 catch
// Promise.race([
//   requestData(),
//   new Promise((_, reject) => setTimeout(reject, 3000)),
// ])
//   .then((data) => console.log)
//   .catch((err) => console.log(err));

// #81. 프로미스는 불변 객체
function requestData() {
  const p = Promise.resolve(10);

  p.then(() => {
    return 20;
  });

  return p;
}

// requestData().then((v) => {
//   console.log(v);
// });

function requestData2() {
  return Promise.resolve(10).then((v) => {
    return 20;
  });
}

requestData2().then((v) => {
  console.log(v);
});
