export function Lesson_Array() {
  const nums: number[] = [0, 1, 2, 3]
  console.log(nums)
  console.log(nums[0], nums[2])
  console.log(nums[4])

  nums[4] = 4
  console.log(nums[4])

  nums.push(5)
  console.log(nums[5])

  const last: number = nums.slice(-1)[0]
  console.log(`last ${last}`)
  //slice(-1) 後ろから一番目取得

  const pop: number = nums.pop()
  console.log(`pop ${pop}`)
  console.log(`nums ${nums}`)
  //pop 一番後ろを取り出し、配列からは削除
}

Lesson_Array()