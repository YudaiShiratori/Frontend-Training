"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_Optional() {
    console.log('result1', Lesson4_1('yudai', 'developer'));
    console.log('result1', Lesson4_1('yudai', undefined));
    console.log('result1', Lesson4_1('yudai', null));
}
exports.Lesson_Optional = Lesson_Optional;
function Lesson4_1(name, profile) {
    if (!profile) {
        return `profile is ${profile}`;
    }
    return name + ' is ' + profile;
}
Lesson_Optional();
//# sourceMappingURL=Lesson_Optional.js.map