export function Lesson_Inheritance() {
  const employee1: Employee = new Employee(0)
  employee1.setProfile('syatyou', 'president')
  const info1: any = employee1.getMyInfo()
  console.log(employee1.name, info1)

  const employee2: Employee = new Employee(1)
  employee2.setProfile('kanko', 'Enginner')
  const info2: any = employee2.getMyInfo()
  console.log(employee2.name, info2)

  const hesokuriResult1: string = employee1.getHesokuri()
  const hesokuriResult2: string = employee2.getHesokuri()
  console.log(employee1.name, hesokuriResult1)
  console.log(employee2.name, hesokuriResult2)
  
  employee1.CheckAsset()

}

class CompanyEmployee {
  companyName: string
  companyTel: string
  employeeId: number
  protected asset: number
  private hesokuri: number
  constructor() {
    this.companyName = 'Develop.Inc.'
    this.companyTel = "0122323222"
    this.asset = 100_100_100
    this.hesokuri = 10000
  }

  getCompanyInfo() {
    return {
      name: this.companyName,
      tel: this.companyTel
    }
  }

  getHesokuri(id: number): string {
    return id === 0 ?  `会社のへそくりは${this.hesokuri}円` : '社長じゃないからへそくりわからない'
  }
}

class Employee extends CompanyEmployee {
  name: string
  profile: string
  constructor(id: number) {
    super()
    this.employeeId = id
  }
  setProfile(name: string, profile: string) {
    this.name = name
    this.profile = profile
  }
  
  getMyInfo(): any {
    const info: any = super.getCompanyInfo()
    info['id'] = this.employeeId
    info['name'] = this.name
    info['profile'] = this.profile
    return info
  }

  CheckAsset() {
    console.log(`Company Asset: ${this.asset}`)
  }

  getHesokuri() {
    return super.getHesokuri(this.employeeId)
  }
}

Lesson_Inheritance()
