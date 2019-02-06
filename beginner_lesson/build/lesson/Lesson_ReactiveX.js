"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJSをインポートする
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const axios_1 = require("axios");
const utils_1 = require("../utils/utils");
// Qiita APIのURLを定義
/*
   注意：リクエストしすぎるとリクエスト制限がかかる
*/
const userName = 'YudaiShiratori'; // 自分のアカウントを設定
const userListUrl = 'https://qiita.com/api/v2/users';
const userDetailUrl = `https://qiita.com/api/v2/users/${userName}`;
/*
  Observable: ストリーム（データを流す通路）
  BehaviorSubject: 最後のデータを保持する。onNextで新しいデータを流し、subscribeとvalueでデータを取得できる
  from: 引数に指定されたデータのObservableを生成
  zip: 複数のObservableから流れてきたデータを組み合わせて単一のデータにする
  empty: 何のデータを持っていないObservableを生成
  map: pip内で使えるmap。機能はリスト操作のmapと同じ
  catchError: pip内で発生したエラーをキャッチ
*/
async function Lesson_ReactiveX() {
    console.log('---- Lesson_ReactiveX ----');
    const sleepTime = 1000; // 順番にコールするために待ち合わせする
    // ■ Rxで値を加工する
    LessonRxProcess();
    // ■ Rxでデータバインディングのようなことをする
    LessonRxBinding();
    // ■ RxでAPIのレスポンスを取得する
    LessonRxApiRequest();
    await utils_1.sleep(sleepTime);
    // ■ RxでPromiseAllのようなことをする
    LessonRxPromiseAll();
    await utils_1.sleep(sleepTime);
    // ■ RxでAsync/Awaitのようなことをする
    LessonRxAsyncAwait();
    await utils_1.sleep(sleepTime);
    console.log('------------------\n');
}
exports.Lesson_ReactiveX = Lesson_ReactiveX;
// ■ Rxで値を加工する
function LessonRxProcess() {
    /*
      Observable = ストリーム（データを流せれる通路）
      subscribeをするとデータをストリームへ流して処理できる
    */
    const o1 = rxjs_1.from([1, 2, 3, 4, 5]);
    const o2 = rxjs_1.from(['A', 'B', 'C', 'D', 'E']);
    o1.subscribe((value) => {
        console.log('RxProcess o1', value); // RxProcess o1 1 ... RxProcess o1 5 の順に表示される
    });
    // o1に流れてくる値を加工してストリームへ流す
    o1.pipe(operators_1.map((x) => x * 2)).subscribe((value) => {
        console.log('RxProcess o1', value); // RxProcess o1 2 ... RxProcess o1 10 の順に表示される
    });
    // list1からlist2へ順番にストーリムへ流す
    const list1 = [1, 2, 3, 4, 5];
    const list2 = ['A', 'B', 'C', 'D', 'E'];
    const o3 = rxjs_1.from([list1, list2]).pipe(operators_1.map((value) => {
        let result = value;
        if (typeof value[0] === 'number') {
            result = value.map((x) => x * 2);
        }
        if (typeof value[0] === 'string') {
            result = value.map((x) => x + x);
        }
        return result;
    }));
    o3.subscribe((value) => {
        console.log('RxProcess o3', value); // RxProcess o3 [ 2, 4, 6, 8, 10 ] ... RxProcess o3 [ 'AA', 'BB', 'CC', 'DD', 'EE' ] の順に表示される
    });
    // o1とo2の値を結合してストリームへ流す
    const o4 = rxjs_1.zip(o1, o2).pipe(operators_1.map(([o1Value, o2Value]) => `${o2Value}: ${o1Value}`));
    o4.subscribe((value) => {
        console.log('RxProcess o4', value); // RxProcess o4 A: 1 ... RxProcess o4 E: 5 の順に表示される
    });
}
// ■ Rxでデータバインディングのようなことをする
function LessonRxBinding() {
    const o1 = new rxjs_1.BehaviorSubject(1);
    const o2 = new rxjs_1.BehaviorSubject('A');
    console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`); // RxBinding o1 1, o2 A
    // o1をsubscribeしてo2の値を変える
    o1.subscribe((value) => {
        switch (value) {
            case 2:
                o2.next('B');
                break;
            case 3:
                o2.next('C');
                break;
            case 4:
                o2.next('D');
                break;
            case 5:
                o2.next('E');
                break;
            default:
                o2.next('A');
        }
    });
    /*
      nextでsubscribeで値を取得できる。
      subscribe内に処理を書けばo1の値によってユニークな処理を実現できる。
    */
    o1.next(2);
    console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`); // RxBinding o1 2, o2 B
    o1.next(3);
    console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`); // RxBinding o1 3, o2 C
    o1.next(4);
    console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`); // RxBinding o1 4, o2 D
    o1.next(5);
    console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`); // RxBinding o1 5, o2 E
}
// ■ RxでAPIのレスポンスを取得する
function LessonRxApiRequest() {
    // ユーザー情報を取得
    LessonRxAPIClient(userDetailUrl).subscribe((result) => {
        console.log('RxApiRequest', result.data.profile_image_url); // RxApiRequest https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
    }, (error) => {
        console.error('error', error);
    });
}
// ■ RxでPromiseAllのようなことをする
function LessonRxPromiseAll() {
    // ユーザーリストとユーザー情報を取得
    rxjs_1.zip(LessonRxAPIClient(userListUrl), LessonRxAPIClient(userDetailUrl)).pipe(operators_1.map(([result1, result2]) => `${result1.data.length} ${result2.data.profile_image_url}`)).subscribe((result) => {
        console.log('RxPromiseAll', result); // RxPromiseAll 20 https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
    }, (error) => {
        console.error('error', error);
    });
}
// ■ RxでAsync/Awaitのようなことをする
function LessonRxAsyncAwait() {
    // ユーザーリストを取得して１番目のユーザーの情報を取得する
    LessonRxAPIClient(userListUrl).pipe(operators_1.map(response => {
        const id = response.data[0].id;
        console.log('RxAsyncAwait', id);
        return LessonRxAPIClient(userListUrl + `/${id}`).toPromise();
    }), operators_1.catchError((error, caught) => {
        console.error('error', error);
        return rxjs_1.empty();
    })).subscribe((promise) => {
        promise.then((result) => {
            console.log('RxAsyncAwait', result.data.id, result.data.profile_image_url);
        }).catch((error) => {
            console.error('error', error);
        });
    });
}
function LessonRxAPIClient(url) {
    return rxjs_1.from(axios_1.default.get(url));
}
Lesson_ReactiveX();
//# sourceMappingURL=Lesson_ReactiveX.js.map