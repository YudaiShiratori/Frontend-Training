"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocialType;
(function (SocialType) {
    SocialType[SocialType["Twitter"] = 2] = "Twitter";
    SocialType[SocialType["Facebook"] = 3] = "Facebook";
    SocialType[SocialType["Instagram"] = 4] = "Instagram";
})(SocialType || (SocialType = {}));
function Lesson_Enum() {
    let type = SocialType.Twitter;
    let typeNum = SocialType.Twitter.valueOf();
    console.log(type);
    console.log(typeNum);
    type = SocialType.Facebook;
    typeNum = SocialType.Facebook.valueOf();
    console.log(type);
    console.log(typeNum);
    type = SocialType.Instagram;
    typeNum = SocialType.Instagram.valueOf();
    console.log(type);
    console.log(typeNum);
}
exports.Lesson_Enum = Lesson_Enum;
Lesson_Enum();
//# sourceMappingURL=Lesson_Enum.js.map