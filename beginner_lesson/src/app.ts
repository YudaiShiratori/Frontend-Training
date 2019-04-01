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

export function showHundred1() {
  let result: string = ''
  for(let i = 0; i<=100; i++) {
    result += `${i} `
  }
  console.log(result)
}
console.log(showHundred1())

export function showHundred2() {
  let result: string = ''
  for(let i = 0; i<=100; i++) {
    result += `${i} `
    if (i % 5 == 0) {
      result += '\n'
    }
  }
  console.log(result)
}
console.log(showHundred2())

function mergeString(str1: string, str2: string, str3: string): string {
  return `${str1}  ${str2}  ${str3}`
}
console.log(mergeString('俺は', '明日', '勉強する'))

function getArrayString(str1: string, str2: string, str3: string): string[] {
  return [`${str1}`,`${str2}`,`${str3}`]
}
console.log(getArrayString('俺は', '明日', '勉強する'))