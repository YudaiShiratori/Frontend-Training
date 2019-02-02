export function Lesson_Compare() {
  let variable: number =1

  if (variable === 1) {
    console.log('Case ===', 'variableは1です。')
  } else {
    console.log('Case !==', 'variableは1以外です。')
  }

  if (variable > 1) {
    console.log('Case >', 'variableは1以上です。')
  } else {
    console.log('Case >', 'variableは1含め1以下です。')
  }
  if (variable >= 1) {
    console.log('Case >=', 'variableは1含め1以上です。')
  } else {
    console.log('Case >=', 'variableは1以下です。')
  }

  if (variable < 1) {
    console.log('Case <', 'variableは1以下です。')
  } else {
    console.log('Case <', 'variableは1含め1以上です。')
  }
  if (variable <= 1) {
    console.log('Case <=', 'variableは1含め1以下です。') 
  } else {
    console.log('Case <=', 'variableは1以上です。')
  }
}

Lesson_Compare()
