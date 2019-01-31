"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Lesson_Listoperation() {
    const nums = [0, 10, 2, 3, 4, 5];
    //filter
    const numsFiltered1 = nums.filter(item => item != 0);
    console.log('filter1', numsFiltered1);
    const numsFiltered2 = nums.filter(item => {
        if (item === 0) {
            return true;
        }
        return false;
    });
    console.log('filter2', numsFiltered2);
    //map 新しい配列作る
    const numsMap1 = nums.map(item => item * 2);
    console.log('map1', numsMap1);
    const numsMap2 = nums.map(item => { return item * 2; });
    console.log('map2', numsMap2);
    //reduce 
    const reduce1 = nums.reduce((prevItem, currentItem) => prevItem + currentItem);
    console.log('reduce1', reduce1);
    const maxReduce2 = nums.reduce((prevItem, currentItem) => {
        if (prevItem > currentItem) {
            return prevItem;
        }
        else {
            return currentItem;
        }
    });
    console.log('maxReduce2', maxReduce2);
    const minReduce3 = nums.reduce((prevItem, currentItem) => {
        if (prevItem > currentItem) {
            return currentItem;
        }
        else {
            return prevItem;
        }
    });
    //every 全てが条件を満たすなら
    const isEvery1 = nums.every(item => item >= 0);
    console.log('isEvery1', isEvery1);
    const isEvery2 = nums.every(item => item % 2 === 0);
    console.log('isEvery2', isEvery2);
    //some 一つでも条件満たすなら
    const isSome1 = nums.some(item => item >= 0);
    console.log('isSome1', isSome1);
    const isSome2 = nums.some(item => item % 2 === 0);
    console.log('isSome2', isSome2);
    //sort　並び替え
    const sort1 = nums.sort((previousItem, currentItem) => {
        if (previousItem < currentItem) {
            return -1;
        }
        else {
            return 1;
        }
    });
    console.log('sort1', sort1);
    const sort2 = nums.sort((previousItem, currentItem) => {
        if (previousItem < currentItem) {
            return 1;
        }
        else {
            return -1;
        }
    });
    console.log('sort2', sort2);
}
exports.Lesson_Listoperation = Lesson_Listoperation;
Lesson_Listoperation();
//# sourceMappingURL=Lesson_ListOperation.js.map