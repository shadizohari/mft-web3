
// تابعی بنویسید که آرایه ای از اعداد دریافت میکند و کوچکترین عدد را return می­کند.

let findMin = function (arrnum) {
    if (arrnum.length > 0) {
        let min = arrnum[0];
        arrnum.forEach(function (item) {
            if (item < min) {
                min = item;
            }
        });
        return min;
    } else {
        return "arrey is empty"
    }


}

console.log(findMin([5, 7, 1]));
console.log(findMin([]));

