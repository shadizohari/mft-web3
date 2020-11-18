
// تابعی بنویسید که آرایه ای از اعداد را دریافت میکند و بزرگترین عدد را return می­کند.

let findMax = function (arrnum) {
    if (arrnum.length > 0) {
        let max = arrnum[0];
        arrnum.forEach(function (item) {
            if (item > max) {
                max = item;
            }
        });
        return max;
    } else {
        return "arrey is empty"
    }


}

console.log(findMax([1, 4, 2]));

