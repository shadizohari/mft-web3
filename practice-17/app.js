
//  تابع ای بنویسید که یک آرایه از عدد دریافت میکند و میانه آن را محاسبه و در خروجی چاپ میکند.

let miyane = function (arrnum) {
    let arrLength = arrnum.length;
    if (arrLength % 2 == 0) {
        return (arrnum[arrLength / 2] + arrnum[arrLength / 2 - 1]) / 2
    } else {
        return arrnum[Math.floor(arrLength / 2)];
    }

}
console.log(miyane([1, 2, 3, 4]));
console.log(miyane([1, 2, 3, 4, 5, 6, 7]));

