//型変換
export function Lesson_Cast() {
  const numStr: string = '1000'
  const num: number = Number(numStr)
  if (typeof num === 'number') {
    console.log(`${typeof numStr} -> ${typeof num}`, num)
  }
  // console.log(Number(numStr), typeof(Number(numStr)))
  
  const strNum: number = 2000
  const str: string = String(strNum)
  if (typeof str === 'string') {
    console.log(`${typeof strNum} -> ${typeof str}`, str, strNum.toString())
  }
  // console.log(strNum.toString())

  const classAny: any = new LessonCast1()
  if (classAny instanceof LessonCast1) {
    console.log(`classAnyの型はLessonCast1`)
  }
}
class LessonCast1 {}

Lesson_Cast()