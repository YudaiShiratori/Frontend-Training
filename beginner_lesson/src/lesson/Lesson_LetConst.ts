export function Lesson_LetConst() {
  let count: number = 1
  count += 1

  let message: String = ``
  message = `Lesson ${count}`
  console.log('変数', message)


  const name : String = 'tanaka'
  console.log('定数', name)
}

Lesson_LetConst()