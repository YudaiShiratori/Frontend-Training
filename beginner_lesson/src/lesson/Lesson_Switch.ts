export function Lesson_Switch() {
  const resultA: string = Lesson_Switch_0(1996)
  const resultB: string = Lesson_Switch_0(2019)
  const resultC: string = Lesson_Switch_0(10675760)
  console.log(resultA)
  console.log(resultB)
  console.log(resultC)
}
function Lesson_Switch_0(year: number): string {
  let result: string
  switch(year) {
    case 1996:
      result = '平成八年'
      break
    case 2019:
      result = '今年'
      break
    default:
      result = 'I dont know' 
  }
  return result
}

Lesson_Switch()
