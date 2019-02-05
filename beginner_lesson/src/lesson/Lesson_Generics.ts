export function Lesson_Generics() {
  const staff = new Staff()
  staff.setData('大学生A', 'イベントスタッフ')
  const manager = new Manager()
  manager.setData('社員A', 'イベントのマネージャー')
  manager.companyName = "Coompanu.Inc."
  console.log('スタッフプロフィール', staff.name, staff.profile)
  console.log('マネージャープロフィール', manager.name, manager.profile)

  salaryPay(staff)
  salaryPay(manager)
  console.log('スタッフ給料', staff.salary)
  console.log('マネージャー給料', manager.salary)

  console.log('スタッフの活動', staff.isActive, '==', staff.isActive == true ? '活動中': '休憩なう')
  manager.breakStaff(staff)
  console.log('スタッフの活動', staff.isActive, '==', staff.isActive == true ? '活動中': '休憩なう')

}

function salaryPay<T extends Human>(employee: T) {
  if (employee instanceof Staff) {
    console.log('OK, I will be pay salary to Staff.')
    employee.salary = 200_000

    const staff: Staff = employee as Staff
    console.log('スタッフの活動フラグ', staff.isActive)
  }

  if (employee instanceof Manager) {
    console.log('OK, I will be pay salary to Manager.')
    employee.salary = 500_000

    const manager: Manager = employee as Manager
    console.log('マネージャーの会社名', manager.companyName)
  }
}

interface Human {
  name: string
  profile: string
  salary: number
  setData(name: string, profile: string): void
}

class Staff implements Human {
  name: string
  profile: string
  salary: number
  isActive: boolean
  setData(name: string, profile: string) {
    this.name = name
    this.profile = profile
    this.isActive = true
  }

}

class Manager implements Human {
  name: string
  profile: string
  companyName: string
  salary: number
  setData(name: string, profile: string) {
    this.name = name
    this.profile = profile
  }
  breakStaff(staff: Staff) {
    staff.isActive = false
  }
}

Lesson_Generics()