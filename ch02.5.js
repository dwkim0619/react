/*
    async await
    비동기 프로그래밍을 동기 프로그래밍처럼 작성
    await 키워드 오른쪽에 프로미스를 입력하면 그 프로미스가 처리됨 상태가 될 때까지 기다림
*/

// #88.
// async function getData() {
//   // Promise 반환
//   return 123;
// }

// async function getData() {
//   throw new Error("123");
// }
// getData().then((data) => console.log(data));


// #91
// function requestData(value) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('requestData:', value);
//             resolve(value);
//         }, 3000);
//     });
// }

// async function getData() {
//     const data1 = await requestData(10);
//     const data2 = await requestData(20);
//     console.log(data1, data2);
//     return [data1, data2];
// }

// getData();

// #99 Thenable
class ThenableExample {
    then(resolve, reject) {
        setTimeout(() => resolve(123), 1000);
    }
}

async function asyncFunc() {
    const result = await new ThenableExample();
    console.log(result);

}

asyncFunc();