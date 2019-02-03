"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_While() {
    const nums = [8, 2, 2, 3, 8, 5];
    let index = 0;
    let total = nums[0];
    while (index < 5) {
        total += nums[index];
        index += 1;
    }
    console.log('While', total);
    do {
        console.log('do-while', `indexは${index}だけど必ず1回は実行される`);
    } while (index < 5);
}
exports.Lesson_While = Lesson_While;
Lesson_While();
//# sourceMappingURL=Lesson_While.js.map