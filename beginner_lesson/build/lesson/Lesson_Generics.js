"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_Generics() {
    const staff = new Staff();
    staff.setData('大学生A', 'イベントスタッフ');
    const manager = new Manager();
    manager.setData('社員A', 'イベントのマネージャー');
    manager.companyName = "Coompanu.Inc.";
    console.log('スタッフプロフィール', staff.name, staff.profile);
    console.log('マネージャープロフィール', manager.name, manager.profile);
    salaryPay(staff);
    salaryPay(manager);
    console.log('スタッフ給料', staff.salary);
    console.log('マネージャー給料', manager.salary);
    console.log('スタッフの活動', staff.isActive, '==', staff.isActive == true ? '活動中' : '休憩なう');
    manager.breakStaff(staff);
    console.log('スタッフの活動', staff.isActive, '==', staff.isActive == true ? '活動中' : '休憩なう');
}
exports.Lesson_Generics = Lesson_Generics;
function salaryPay(employee) {
    if (employee instanceof Staff) {
        console.log('OK, I will be pay salary to Staff.');
        employee.salary = 200000;
        const staff = employee;
        console.log('スタッフの活動フラグ', staff.isActive);
    }
    if (employee instanceof Manager) {
        console.log('OK, I will be pay salary to Manager.');
        employee.salary = 500000;
        const manager = employee;
        console.log('マネージャーの会社名', manager.companyName);
    }
}
class Staff {
    setData(name, profile) {
        this.name = name;
        this.profile = profile;
        this.isActive = true;
    }
}
class Manager {
    setData(name, profile) {
        this.name = name;
        this.profile = profile;
    }
    breakStaff(staff) {
        staff.isActive = false;
    }
}
Lesson_Generics();
//# sourceMappingURL=Lesson_Generics.js.map