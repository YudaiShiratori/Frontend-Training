"use strict";
// console.log("Hello! world.")
Object.defineProperty(exports, "__esModule", { value: true });
//tasks
function getHola() {
    return 'hola';
}
exports.getHola = getHola;
console.log(getHola());
function getHolaWithDate() {
    const date = new Date();
    var hour = date.getHours();
    if (5 <= hour && hour < 12) {
        return 'おはよう';
    }
    else if (12 <= hour && hour < 18) {
        return 'こんにちは';
    }
    else if (18 <= hour && hour < 24) {
        return 'こんばんは';
    }
    else {
        return '夜更かし';
    }
}
exports.getHolaWithDate = getHolaWithDate;
console.log(getHolaWithDate());
function showHundred1() {
    let result = '';
    for (let i = 0; i <= 100; i++) {
        result += `${i} `;
    }
    console.log(result);
}
exports.showHundred1 = showHundred1;
console.log(showHundred1());
function showHundred2() {
    let result = '';
    for (let i = 0; i <= 100; i++) {
        result += `${i} `;
        if (i % 5 == 0) {
            result += '\n';
        }
    }
    console.log(result);
}
exports.showHundred2 = showHundred2;
console.log(showHundred2());
function mergeString(str1, str2, str3) {
    return `${str1}  ${str2}  ${str3}`;
}
console.log(mergeString('俺は', '明日', '勉強する'));
function getArrayString(str1, str2, str3) {
    return [`${str1}`, `${str2}`, `${str3}`];
}
console.log(getArrayString('俺は', '明日', '勉強する'));
//# sourceMappingURL=app.js.map