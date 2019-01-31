"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_AssociativeArray() {
    const itemA = {
        name: 'yudai',
        age: 22
    };
    const itemB = {
        name: 'Hanako',
        age: 30
    };
    const itemC = {
        name: 'John',
        age: 46
    };
    console.log(itemA);
    console.log(itemA.name);
    const items = [itemA, itemB];
    items.push(itemC);
    console.log(items[2]);
}
exports.Lesson_AssociativeArray = Lesson_AssociativeArray;
Lesson_AssociativeArray();
//# sourceMappingURL=Lesson_AssociativeArray.js.map