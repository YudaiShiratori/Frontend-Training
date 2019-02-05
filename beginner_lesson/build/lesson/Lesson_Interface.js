"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_Interface() {
    //interface
    const student1 = { name: 'Yudai', score: 50 };
    const student2 = { name: 'normalman', score: 100 };
    const student3 = { name: 'geniusman', score: 800 };
    //内定判断
    const result1 = judgementJobOffer(student1);
    const result2 = judgementJobOffer(student2);
    const result3 = judgementJobOffer(student3);
    //合否
    console.log(result1);
    console.log(result2);
    console.log(result3);
}
exports.Lesson_Interface = Lesson_Interface;
class JobOfferResultPass {
}
class JobOfferResultFailure {
}
function judgementJobOffer(student) {
    if (student.score >= 200) {
        const resultDTO = {
            name: student.name,
            isJudgement: true,
            comment: '内定！',
            ceremony: '2019/10/01'
        };
        return resultDTO;
    }
    else {
        const resultDTO = {
            name: student.name,
            isJudgement: false,
            comment: '不合格',
            isOinoriEmail: true
        };
        return resultDTO;
    }
}
Lesson_Interface();
//# sourceMappingURL=Lesson_Interface.js.map