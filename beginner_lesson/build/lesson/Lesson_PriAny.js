"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_PriAny() {
    //primitive
    const num = 10;
    const str = '文字';
    const isActive = true;
    console.log('num', num);
    console.log('str', str);
    console.log('isActive', isActive);
    //any
    let variable;
    variable = 1;
    console.log('number', variable);
    variable = '文字';
    console.log('string', variable);
    variable = false;
    console.log('isActive', variable);
    variable = new Date();
    console.log('class', variable);
}
exports.Lesson_PriAny = Lesson_PriAny;
Lesson_PriAny();
//# sourceMappingURL=Lesson_PriAny.js.map