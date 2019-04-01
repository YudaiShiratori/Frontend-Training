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


function calc(a: number, b: number, type: CalcType): number {
  switch (type) {
    case CalcType.Add:
      return a + b
    case CalcType.Sub:
      return a - b
    case CalcType.Multi:
      return a * b
    case CalcType.Div:
      return a / b
  }
}
enum CalcType {
  Add,
  Sub,
  Multi,
  Div,
}
const a = 10;
const b = 2;
console.log('Add', calc(a, b, CalcType.Add))      // Add 12
console.log('Sub', calc(a, b, CalcType.Sub))      // Sub 8
console.log('Multi', calc(a, b, CalcType.Multi))  // Multi 20
console.log('Div', calc(a, b, CalcType.Div))      // Div 5


function multiple(nums: number[], multiple: number): number[]{
  return nums.map((num) => num * multiple )
}
console.log('multiple', multiple([10, 2, 4, 1], 3))