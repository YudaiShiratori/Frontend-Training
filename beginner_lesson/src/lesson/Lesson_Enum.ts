enum SocialType {
  Twitter = 2,
  Facebook,
  Instagram
}

export function Lesson_Enum() {
  let type: SocialType = SocialType.Twitter
  let typeNum: number = SocialType.Twitter.valueOf()
  console.log(type)
  console.log(typeNum)

  type = SocialType.Facebook
  typeNum = SocialType.Facebook.valueOf()
  console.log(type)
  console.log(typeNum)

  type = SocialType.Instagram
  typeNum = SocialType.Instagram.valueOf()
  console.log(type)
  console.log(typeNum)
}

Lesson_Enum()
