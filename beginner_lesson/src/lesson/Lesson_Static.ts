
export function Lesson_Static() {
  const class1: LessonStatic1 = new LessonStatic1()
  console.log(class1.getCount())
  class1.setCount(200)
  console.log(class1.getCount())

  const class2: LessonStatic1 = new LessonStatic1()
  console.log(class2.getCount())
  const count = LessonStatic1.count
  console.log(count)

  const result = LessonStatic1.getResult()
  console.log(result)
  
}

class LessonStatic1 {
  static count: number = 10
  static getResult() {
    return `Count is ${this.count}`
  }
  getCount() {
    return LessonStatic1.count
  }
  setCount(count: number) {
    return LessonStatic1.count = count
  }
}
Lesson_Static()

/* static */
/* 
  インスタンスを生成しない静的メンバ・メソッド
  静的な保存領域にデータを保持するため、値をどこから読んでも共通
  共有パラメータ、値を共有したい時に利用する
*/
