"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_If() {
    let variable = 2;
    if (variable === 1) {
        console.log(`Case ${variable}`, 'variableは1');
    }
    else {
        console.log(`Case ${variable}`, 'variableは1以外');
    }
    variable = 1;
    if (variable === 1) {
        console.log(`Case ${variable}`, 'variableは1');
    }
    else {
        console.log(`Case ${variable}`, 'variableは1以外');
    }
    variable = 3;
    if (variable === 1) {
        console.log(`Case ${variable}`, 'variableは1');
    }
    else if (variable === 3) {
        console.log(`Case ${variable}`, 'variableは3');
    }
    else {
        console.log(`Case ${variable}`, 'variableは1と3以外');
    }
}
exports.Lesson_If = Lesson_If;
Lesson_If();
//# sourceMappingURL=Lesson_If.js.map