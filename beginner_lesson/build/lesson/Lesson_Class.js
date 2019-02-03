"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(sexType, birthDay) {
        this.SexType = sexType;
        this.birthDay = birthDay;
    }
    setStatus(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    showStatus() {
        console.log('name', this.name, 'height', this.height, 'weight', this.weight, 'birthDay', this.birthDay);
    }
    introPartner(human) {
        if (this.SexType != human.SexType) {
            this.partner = human;
            human.partner = this;
            this.showHonne();
        }
    }
    showPartner() {
        if (this.partner !== undefined) {
            console.log(`${this.name}のパートナーは`, this.partner.name);
        }
    }
    showHonne() {
        console.log('まぁいつ別れるか分からないけどね。これは独り言だから内緒だよ！');
    }
}
var SexType;
(function (SexType) {
    SexType[SexType["Man"] = 0] = "Man";
    SexType[SexType["Woman"] = 1] = "Woman";
})(SexType || (SexType = {}));
function Lesson_Class() {
    const man = new Human(SexType.Man, '1996/10/23');
    man.name = 'Yudai';
    man.setStatus(168, 62);
    man.showStatus();
    const woman = new Human(SexType.Woman, '1992/1/16');
    woman.name = 'kanako';
    woman.setStatus(150, 120);
    man.introPartner(woman);
    man.showPartner();
    woman.showPartner();
}
exports.Lesson_Class = Lesson_Class;
Lesson_Class();
//# sourceMappingURL=Lesson_Class.js.map