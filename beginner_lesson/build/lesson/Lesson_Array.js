"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_Array() {
    const nums = [0, 1, 2, 3];
    console.log(nums);
    console.log(nums[0], nums[2]);
    console.log(nums[4]);
    nums[4] = 4;
    console.log(nums[4]);
    nums.push(5);
    console.log(nums[5]);
    const last = nums.slice(-1)[0];
    console.log(`last ${last}`);
    //slice(-1) 後ろから一番目取得
    const pop = nums.pop();
    console.log(`pop ${pop}`);
    console.log(`nums ${nums}`);
    //pop 一番後ろを取り出し、配列からは削除
}
exports.Lesson_Array = Lesson_Array;
Lesson_Array();
//# sourceMappingURL=Lesson_Array.js.map