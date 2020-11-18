
// تابعی بنویسید که یک آرایه (از نمرات دانشجویان) دریافت می­کند و تعداد دفعات تکرار نمره ۲۰ را در خروجی چاپ می­کند.

let findFullGrade = function (arrGrade) {
    let number = 0;
    arrGrade.forEach(function (item) {
        if (item == 20) {
            number += 1
        }
    });
    return number;
}

console.log(findFullGrade([10, 20, 12, 13, 20, 20]));


