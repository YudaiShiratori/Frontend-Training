// console.log("Hello! world.")

//tasks
export function getHola() {
  return 'hola'
}
console.log(getHola())

export function getHolaWithDate() {
  const date = new Date()
  var hour = date.getHours()
  if (5 <= hour && hour < 12) {
    return 'おはよう'
  } else if (12 <= hour && hour < 18) {
    return 'こんにちは'
  } else if (18 <= hour && hour < 24) {
    return 'こんばんは'
  } else {
    return '夜更かし'
  }
}
console.log(getHolaWithDate())

export function showHundred() {
  let result: string = ''
  for(let i = 0; i<=100; i++) {
    result += `${i} `
  }
  console.log(result)
}
console.log(showHundred())

