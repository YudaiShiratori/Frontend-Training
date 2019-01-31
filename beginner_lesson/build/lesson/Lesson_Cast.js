"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//型変換
function Lesson_Cast() {
    const numStr = '1000';
    const num = Number(numStr);
    if (typeof num === 'number') {
        console.log(`${typeof numStr} -> ${typeof num}`, num);
    }
    // console.log(Number(numStr), typeof(Number(numStr)))
    const strNum = 2000;
    const str = String(strNum);
    if (typeof str === 'string') {
        console.log(`${typeof strNum} -> ${typeof str}`, str, strNum.toString());
    }
    // console.log(strNum.toString())
    const classAny = new LessonCast1();
    if (classAny instanceof LessonCast1) {
        console.log(`classAnyの型はLessonCast1`);
    }
}
exports.Lesson_Cast = Lesson_Cast;
class LessonCast1 {
}
Lesson_Cast();
//# sourceMappingURL=Lesson_Cast.js.map