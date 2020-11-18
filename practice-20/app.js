
// تابع ای بنویسید که آرایه از رشته دریافت کرده و آرایه ای از رشته ها به فرمت تمرین چهارم برگرداند.
// 'byob' ------- 'B.Y.O.B'

let arraySring = function (arr) {
    let strings;
    arr.forEach(function (item, index) {
        strings = "";
        arr[index] = item.toUpperCase().split("");
        arr[index].forEach(function (letter) {
            strings = strings.concat(letter) + ".";
        });
        arr[index] = strings.substring(0, strings.length - 1);
    });

    return arr;
}
console.log(arraySring(["asf", "adffg", "asdg"]))
