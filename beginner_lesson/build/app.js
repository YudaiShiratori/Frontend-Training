"use strict";
// console.log("Hello! world.")
Object.defineProperty(exports, "__esModule", { value: true });
//task1
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
function showHundred() {
    let result = '';
    for (let i = 0; i <= 100; i++) {
        result += `${i} `;
    }
    console.log(result);
}
exports.showHundred = showHundred;
console.log(showHundred());
//# sourceMappingURL=app.js.map