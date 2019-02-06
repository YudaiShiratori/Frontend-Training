import axios from 'axios'
import { sleep } from '../utils/utils'

const userName: string = 'YudaiShiratori'
const userListUrl: string = 'https://qiita.com/api/v2/users'
const userDetailUrl: string = `https://qiita.com/api/v2/users/${userName}`

export async function Lesson_AsyncProcess() {
  console.log('---- Lesson_AsyncProcess ----')
  const sleepTime: number = 1000

  LessonAsyncAwait()
  await sleep(sleepTime)

  LessonPromiseAll()
  await sleep(sleepTime)
  console.log('--------/n')
}

async function LessonAsyncAwait() {
  try {
    const result1 = await axios.get(userListUrl)
    const id: string = result1.data[0].id
    console.log('LessonAsyncAwait', id)

    const result2 = await axios.get(userListUrl + `/${id}`)
    console.log('LessonAsyncAwait', id, result2.data.profile_image_url)

  } catch (error) {
    console.log('error', error)
  }
}

function LessonPromiseAPIClient(url: string) {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then((result: any) => {
      resolve(result)
    }).catch((error: Error) => {
      reject(error)
    })
  })
}

function LessonPromiseAll() {
  Promise.all([
    LessonPromiseAPIClient(userListUrl),
    LessonPromiseAPIClient(userDetailUrl)
  ]).then((result: any[]) => {
    console.log('LessonPromiseAll', result[0].data.length, result[1].data.profile_image_url)
  }).catch((error: Error) => {
    console.log('error', error)
  })
}

Lesson_AsyncProcess()
