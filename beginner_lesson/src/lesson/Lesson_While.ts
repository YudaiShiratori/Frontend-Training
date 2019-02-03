export function Lesson_While() {
  const nums: number[] = [8, 2, 2, 3, 8, 5]
  let index: number = 0
  let total: number = nums[0]

  while (index < 5) {
    total += nums[index]
    index += 1
  }
  console.log('While', total)

  do {
    console.log('do-while', `indexは${index}だけど必ず1回は実行される`)
  } while( index < 5 )

}

Lesson_While()