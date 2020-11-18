
// تابعی بنویسید که آرایه ای دریافت کند و دومین کوچکترین عنصر آن را return کند. (فکر کنید که این تابع به ازای یک آرایه n عنصری چه تعداد مقایسه انجام می­دهد؟؟)

let secondMax = function (arrnum) {
    let sort = [];
    let min;
    let i;
    let arrLength = arrnum.length;
    for (let j = 0; j < arrLength; j++) {
        min = arrnum[0];
        i = 0;
        arrnum.forEach(function (item, index) {
            if (item < min) {
                min = item;
                i = index;
            }
        });
        sort.push(arrnum.splice(i, 1)[0]);
    }
    console.log(sort);
    return sort[sort.length - 2];

}

console.log(secondMax([2, 3, 5, 1, -3]));


