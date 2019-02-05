export function Lesson_Interface() {
  //interface
  const student1: StudentDTO = { name: 'Yudai', score: 50}
  const student2: StudentDTO = { name: 'normalman', score: 100}
  const student3: StudentDTO = { name: 'geniusman', score: 800}

  //内定判断
  const result1: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(student1)
  const result2: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(student2)
  const result3: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(student3)

  //合否
  console.log(result1)
  console.log(result2)
  console.log(result3)

}

interface StudentDTO {
  name: string
  score: number
}

interface JobOfferResultDTO {
  name: string
  isJudgement: boolean
  comment: string
}

class JobOfferResultPass implements JobOfferResultDTO {
  name: string
  isJudgement: boolean
  comment: string
  ceremony: string
}

class JobOfferResultFailure implements JobOfferResultDTO {
  name: string
  isJudgement: boolean
  comment: string
  isOinoriEmail: boolean
}

function judgementJobOffer(student: StudentDTO): JobOfferResultPass | JobOfferResultFailure {
  if (student.score >= 200) {
    const resultDTO: JobOfferResultPass = {
      name: student.name,
      isJudgement: true,
      comment: '内定！',
      ceremony: '2019/10/01'
    }
    return resultDTO
  } else {
    const resultDTO: JobOfferResultFailure = {
      name: student.name,
      isJudgement: false,
      comment: '不合格',
      isOinoriEmail: true
    }
    return resultDTO
  }
}

Lesson_Interface()
