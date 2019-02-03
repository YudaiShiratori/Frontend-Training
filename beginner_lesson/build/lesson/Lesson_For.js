"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_For() {
    const nums = [4, 1, 2, 6, 4, 5];
    for (let i = 0; i < nums.length; i++) {
        console.log('for', i, nums[i]);
    }
    for (let i in nums) {
        console.log('for', i, nums[i]);
    }
    //Best!
    nums.forEach((item, i) => {
        console.log('for', i, nums[i]);
    });
}
exports.Lesson_For = Lesson_For;
Lesson_For();
//# sourceMappingURL=Lesson_For.js.map