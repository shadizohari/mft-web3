
// تابعی بنویسید که دو آرایه برابر از اعداد دریافت کرده و اندیس های متناظر را با یکدیگر جمع کرده و در آرایه جدیدی ثبت میکند. 
// در آخر آرایه جدید را باز میگرداند.

let sumArr = function (arr1, arr2) {
    let x = 0;
    let arr4;

    if (arr1.length <= arr2.length) {
        x = arr1.length;
        y = arr2.length;
        arr4 = arr2;
    } else {
        x = arr2.length;
        y = arr1.length;
        arr4 = arr1;
    }

    console.log(x);
    let arr3 = [];
    let itemSum;
    for (let i = 0; i < x; i++) {
        itemSum = arr1[i] + arr2[i];
        arr3.push(itemSum);
    }

    for (let i = x; i < y; i++) {
        arr3.push(arr4[i]);
    }

    return arr3;

}

console.log(sumArr([8, 9, 10, 34], [11, 12, 13]));

