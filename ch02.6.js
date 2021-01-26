/*
    template literals : 동적 문자열 생성
    ${expression}

    tagged template literals
*/

const person = 'mike';
const age = 28;

function myTag(strings, ...expressions) {
    const str0 = strings[0];
    const str1 = strings[1];

    const ageStr = expressions[0] > 99 ? 'centenarian' : 'youngster';

    return str0 + expressions[0] + str1 + ageStr;
}

const output = myTag`that ${person} is a ${age}`;
console.log(output);

/*

*/