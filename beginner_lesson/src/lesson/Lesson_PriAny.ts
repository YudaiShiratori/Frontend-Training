export function Lesson_PriAny() {
//primitive
  const num: number = 10
  const str: string = '文字'
  const isActive: boolean = true

  console.log('num', num)
  console.log('str', str)
  console.log('isActive',isActive)

//any
  let variable: any
  variable = 1
  console.log('number', variable)

  variable = '文字'
  console.log('string', variable)

  variable = false
  console.log('isActive', variable)

  variable = new Date()
  console.log('class', variable)
}

Lesson_PriAny()