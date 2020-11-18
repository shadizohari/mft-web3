
//  تابع ای بنویسید که یک رشته دریافت می­کند و خروجی زیر را تولید میکند.
// 'byob' ------- 'B.Y.O.B'

let spell = function (str) {
    let strings = "";
    let separate = str.toUpperCase().split("");
    separate.forEach(function (item, index) {
        strings = strings.concat(item) + ".";
    });
    strings = strings.substring(0, strings.length - 1);
    return strings;

}
console.log(spell("salam"));

