export function Lesson_Listoperation() {
  const nums: number[] = [0, 10, 2, 3, 4, 5]
//filter
  const numsFiltered1: number[] = nums.filter(item => item != 0)
  console.log('filter1', numsFiltered1)
  const numsFiltered2: number[] = nums.filter(item => {
    if (item === 0) {
      return true
    }
    return false
  })
  console.log('filter2', numsFiltered2)

//map 新しい配列作る
  const numsMap1: number[] = nums.map(item => item * 2)
  console.log('map1', numsMap1)
  const numsMap2: number[] = nums.map(item => { return item * 2})
  console.log('map2', numsMap2)

//reduce 
  const reduce1: number = nums.reduce((prevItem, currentItem) => prevItem + currentItem )
  console.log('reduce1', reduce1)
  const maxReduce2: number = nums.reduce((prevItem, currentItem) => {
    if (prevItem > currentItem) {
      return prevItem
    } else {
      return currentItem
    }
  })
  console.log('maxReduce2', maxReduce2)
  const minReduce3: number = nums.reduce((prevItem, currentItem) => {
    if (prevItem > currentItem) {
      return currentItem
    } else {
      return prevItem
    }
  })

//every 全てが条件を満たすなら
  const isEvery1: boolean = nums.every(item => item >= 0)
  console.log('isEvery1', isEvery1)
  const isEvery2: boolean = nums.every(item => item%2 === 0)
  console.log('isEvery2', isEvery2)

//some 一つでも条件満たすなら
  const isSome1: boolean = nums.some(item => item >= 0)
  console.log('isSome1', isSome1)
  const isSome2: boolean = nums.some(item => item%2 === 0)
  console.log('isSome2', isSome2)

//sort　並び替え
  const sort1: number[] = nums.sort((previousItem, currentItem) => {
    if (previousItem < currentItem) {
      return -1
    } else {
      return 1
    }
  })
  console.log('sort1', sort1)
  const sort2: number[]= nums.sort((previousItem, currentItem) => {
    if (previousItem < currentItem) {
      return 1
    } else {
      return -1
    }
  })
  console.log('sort2', sort2)
} 

Lesson_Listoperation()
