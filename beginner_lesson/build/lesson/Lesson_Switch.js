"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_Switch() {
    const resultA = Lesson_Switch_0(1996);
    const resultB = Lesson_Switch_0(2019);
    const resultC = Lesson_Switch_0(10675760);
    console.log(resultA);
    console.log(resultB);
    console.log(resultC);
}
exports.Lesson_Switch = Lesson_Switch;
function Lesson_Switch_0(year) {
    let result;
    switch (year) {
        case 1996:
            result = '平成八年';
            break;
        case 2019:
            result = '今年';
            break;
        default:
            result = 'I dont know';
    }
    return result;
}
Lesson_Switch();
//# sourceMappingURL=Lesson_Switch.js.map