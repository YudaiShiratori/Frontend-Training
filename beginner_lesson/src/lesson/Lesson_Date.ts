export function Lesson_Date() {
  const nowDate: Date = new Date()
  console.log(nowDate)
  console.log(nowDate.toString()) //形を整える

  //タイムゾーン確認
  console.log('Timezone', nowDate.getTimezoneOffset()/60)

  //文字から日時取得
  const date1: Date = new Date('2019/1/1 13:23:30')
  console.log(date1)
  const year = date1.getFullYear()
  const month = date1.getMonth() + 1  //月は0から
  const day = date1.getDate()
  const hour = date1.getHours()
  const minute = date1.getMinutes()
  const second = date1.getSeconds()
  const dayOfWeek = date1.getDay()  //数値
  const dayOfWeekStr = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'][dayOfWeek]
  
  console.log(`${year}/${month}/${day}  ${dayOfWeekStr}  ${hour}:${minute}:${second}`)

  const data2: Date = new Date()
  data2.setFullYear(2018)
  data2.setMonth(0) 
  data2.setDate(20) 
  data2.setHours(12) 
  data2.setMinutes(30) 
  data2.setSeconds(50) 
  console.log(data2)
  console.log(data2.toString()) 

}

Lesson_Date()
