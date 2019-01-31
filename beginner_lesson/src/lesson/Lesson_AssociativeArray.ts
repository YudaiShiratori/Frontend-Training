export function Lesson_AssociativeArray() {
  const itemA: any = {
    name: 'yudai',
    age: 22
  }
  const itemB: any = {
    name: 'Hanako',
    age: 30
  }
  const itemC: any = {
    name: 'John',
    age: 46
  }
  console.log(itemA)
  console.log(itemA.name)

  const items: any[] = [itemA, itemB]
  items.push(itemC)
  console.log(items)
  console.log(items[2])
}

Lesson_AssociativeArray()