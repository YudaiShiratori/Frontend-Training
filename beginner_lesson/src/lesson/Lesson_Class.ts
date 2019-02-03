class Human {
  public name: string
  SexType: SexType
  height: number
  private weight: number
  partner?: Human
  readonly birthDay: string

  constructor(sexType: SexType, birthDay: string) {
    this.SexType = sexType
    this.birthDay = birthDay
  }

  setStatus(height: number, weight: number) {
    this.height = height
    this.weight = weight
  }

  showStatus() {
    console.log('name', this.name, 'height', this.height, 'weight', this.weight, 'birthDay', this.birthDay)
  }

  introPartner(human: Human) {
    if (this.SexType != human.SexType) {
      this.partner = human
      human.partner = this
      this.showHonne()
    }
  }

  showPartner() {
    if (this.partner !== undefined) {
      console.log(`${this.name}のパートナーは`, this.partner.name)
    }
  }

  private showHonne() {
    console.log('まぁいつ別れるか分からないけどね。これは独り言だから内緒だよ！')
  }
}

enum SexType {
  Man,
  Woman
}

export function Lesson_Class() {
  const man: Human = new Human(SexType.Man, '1996/10/23')
  man.name = 'Yudai'
  man.setStatus(168, 62)
  man.showStatus()
  
  const woman: Human = new Human(SexType.Woman, '1992/1/16')
  woman.name = 'kanako'
  woman.setStatus(150, 120)

  man.introPartner(woman)
  man.showPartner()
  woman.showPartner()
}

Lesson_Class()
