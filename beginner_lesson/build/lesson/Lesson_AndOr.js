"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_AndOr() {
    const isActive = true;
    const age = 20;
    if (isActive && age === 20) {
        console.log('AND', '両方一致');
    }
    else {
        console.log('AND', '両方は一致しない');
    }
    if (isActive || age === 30) {
        console.log('OR', '片方だけ一致');
    }
    else {
        console.log('OR', '一致しない');
    }
    const resultA = isActive && age == 20 ? '両方一致' : '両方は一致しない';
    const resultB = isActive || age == 40 ? `片方以上一致` : '一致しない';
    console.log('AND', resultA);
    console.log('OR', resultB);
}
exports.Lesson_AndOr = Lesson_AndOr;
Lesson_AndOr();
//# sourceMappingURL=Lesson_AndOr.js.map