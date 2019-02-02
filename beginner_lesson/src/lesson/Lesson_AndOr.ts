export function Lesson_AndOr() {
  const isActive: boolean = true
  const age: number = 20
  
  if (isActive && age === 20) {
    console.log('AND', '両方一致')
  } else {
    console.log('AND', '両方は一致しない')
  }

  if (isActive || age === 30) {
    console.log('OR', '片方だけ一致')
  } else {
    console.log('OR', '一致しない')
  }

  const resultA: string = isActive && age == 20 ? '両方一致': '両方は一致しない'
  const resultB: string = isActive || age == 40 ? `片方以上一致`: '一致しない'
  console.log('AND', resultA)
  console.log('OR', resultB)
}

Lesson_AndOr()