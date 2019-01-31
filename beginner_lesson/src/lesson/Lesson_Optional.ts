export function Lesson_Optional() {
  console.log('result1', Lesson4_1('yudai', 'developer'))
  console.log('result1', Lesson4_1('yudai', undefined))
  console.log('result1', Lesson4_1('yudai', null))
}
function Lesson4_1(name: string, profile?: string): string {
  if (!profile) {
    return `profile is ${profile}`
  }
  return name + ' is ' + profile
}

Lesson_Optional()