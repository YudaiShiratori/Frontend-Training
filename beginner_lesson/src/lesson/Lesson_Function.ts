export function Lesson_Function() {
  Lesson_Function1()
  Lesson_Function2('引数を指定')
  const result = Lesson_Function3(10, 2)
  console.log('足し算', result)
}

function Lesson_Function1() {
  console.log('関数くん')
}

function Lesson_Function2(str: string) {
  console.log(str)
}

function Lesson_Function3(x: number, y: number): number {
  return x + y
}

Lesson_Function()