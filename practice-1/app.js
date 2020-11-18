
// تابعی بنویسید که آرایه ای از اعداد دریافت کرده و میانگین آن اعداد را باز میگرداند.

let average = function (numarr) {
    let sum = 0;
    numarr.forEach(function (item) {
        sum += item;
    });
    return sum / numarr.length;

}

console.log(average([1, 2, 3, 4, 5]));
