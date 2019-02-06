"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const utils_1 = require("../utils/utils");
const userName = 'YudaiShiratori';
const userListUrl = 'https://qiita.com/api/v2/users';
const userDetailUrl = `https://qiita.com/api/v2/users/${userName}`;
async function Lesson_AsyncProcess() {
    console.log('---- Lesson_AsyncProcess ----');
    const sleepTime = 1000;
    LessonAsyncAwait();
    await utils_1.sleep(sleepTime);
    LessonPromiseAll();
    await utils_1.sleep(sleepTime);
    console.log('--------/n');
}
exports.Lesson_AsyncProcess = Lesson_AsyncProcess;
async function LessonAsyncAwait() {
    try {
        const result1 = await axios_1.default.get(userListUrl);
        const id = result1.data[0].id;
        console.log('LessonAsyncAwait', id);
        const result2 = await axios_1.default.get(userListUrl + `/${id}`);
        console.log('LessonAsyncAwait', id, result2.data.profile_image_url);
    }
    catch (error) {
        console.log('error', error);
    }
}
function LessonPromiseAPIClient(url) {
    return new Promise((resolve, reject) => {
        axios_1.default.get(url)
            .then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
}
function LessonPromiseAll() {
    Promise.all([
        LessonPromiseAPIClient(userListUrl),
        LessonPromiseAPIClient(userDetailUrl)
    ]).then((result) => {
        console.log('LessonPromiseAll', result[0].data.length, result[1].data.profile_image_url);
    }).catch((error) => {
        console.log('error', error);
    });
}
Lesson_AsyncProcess();
//# sourceMappingURL=Lesson_AsyncProcess.js.map