
// تابعی بنویسید که آرایه ای دریافت کند و دومین بزرگترین عنصر آن را return کند. (فکر کنید که این تابع به ازای یک آرایه n عنصری چه تعداد مقایسه انجام می­دهد؟؟)

let secondMin = function (arrnum) {
    let min = arrnum[0];
    let i;
    arrnum.forEach(function (item, index) {
        if (item < min) {
            min = item;
            i = index;
        }
    });
    arrnum.splice(i, 1);
    min = arrnum[0];
    i = 0;
    arrnum.forEach(function (item, index) {
        if (item < min) {
            min = item;
            i = index;
        }
    });
    console.log(min);
    return min;

}

secondMin([1, 2, 3, -5, -3, -10]);



