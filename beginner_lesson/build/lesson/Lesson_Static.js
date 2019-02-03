"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_Static() {
    const class1 = new LessonStatic1();
    console.log(class1.getCount());
    class1.setCount(200);
    console.log(class1.getCount());
    const class2 = new LessonStatic1();
    console.log(class2.getCount());
    const count = LessonStatic1.count;
    console.log(count);
    const result = LessonStatic1.getResult();
    console.log(result);
}
exports.Lesson_Static = Lesson_Static;
class LessonStatic1 {
    static getResult() {
        return `Count is ${this.count}`;
    }
    getCount() {
        return LessonStatic1.count;
    }
    setCount(count) {
        return LessonStatic1.count = count;
    }
}
LessonStatic1.count = 10;
Lesson_Static();
/* static */
/*
  インスタンスを生成しない静的メンバ・メソッド
  静的な保存領域にデータを保持するため、値をどこから読んでも共通
  共有パラメータ、値を共有したい時に利用する
*/
//# sourceMappingURL=Lesson_Static.js.map