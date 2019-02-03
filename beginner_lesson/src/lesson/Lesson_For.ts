export function Lesson_For() {
  const nums: number[] = [4, 1, 2, 6, 4, 5]

  for(let i = 0; i < nums.length; i++) {
    console.log('for', i, nums[i])
  }

  for(let i in nums) {
    console.log('for', i, nums[i])
  }

  //Best!
  nums.forEach((item, i) => {
    console.log('for', i, nums[i])
  })
}

Lesson_For()
