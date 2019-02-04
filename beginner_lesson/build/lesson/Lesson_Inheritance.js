"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_Inheritance() {
    const employee1 = new Employee(0);
    employee1.setProfile('syatyou', 'president');
    const info1 = employee1.getMyInfo();
    console.log(employee1.name, info1);
    const employee2 = new Employee(1);
    employee2.setProfile('kanko', 'Enginner');
    const info2 = employee2.getMyInfo();
    console.log(employee2.name, info2);
    const hesokuriResult1 = employee1.getHesokuri();
    const hesokuriResult2 = employee2.getHesokuri();
    console.log(employee1.name, hesokuriResult1);
    console.log(employee2.name, hesokuriResult2);
    employee1.CheckAsset();
}
exports.Lesson_Inheritance = Lesson_Inheritance;
class CompanyEmployee {
    constructor() {
        this.companyName = 'Develop.Inc.';
        this.companyTel = "0122323222";
        this.asset = 100100100;
        this.hesokuri = 10000;
    }
    getCompanyInfo() {
        return {
            name: this.companyName,
            tel: this.companyTel
        };
    }
    getHesokuri(id) {
        return id === 0 ? `会社のへそくりは${this.hesokuri}円` : '社長じゃないからへそくりわからない';
    }
}
class Employee extends CompanyEmployee {
    constructor(id) {
        super();
        this.employeeId = id;
    }
    setProfile(name, profile) {
        this.name = name;
        this.profile = profile;
    }
    getMyInfo() {
        const info = super.getCompanyInfo();
        info['id'] = this.employeeId;
        info['name'] = this.name;
        info['profile'] = this.profile;
        return info;
    }
    CheckAsset() {
        console.log(`Company Asset: ${this.asset}`);
    }
    getHesokuri() {
        return super.getHesokuri(this.employeeId);
    }
}
Lesson_Inheritance();
/* 継承
  共通のメンバ・メソッドがある場合は親クラス（スーパークラス）を作成し、
  親クラスを継承する子クラス（サブクラス）を用意することで子クラスは親クラスの持ち物を利用できる。
  
  修飾子によってアクセス制限できる
    public: 誰でも利用できる
    private: 親クラスのみ利用できる
    protected: 親クラスと子クラスのみ利用できる。外部からアクセスはできない
*/
// Taro { name: 'Taro', tel: '0120000000', id: 0, profile: 'President' }
// Hanako { name: 'Hanako', tel: '0120000000', id: 1, profile: 'Engineer' }
//# sourceMappingURL=Lesson_Inheritance.js.map