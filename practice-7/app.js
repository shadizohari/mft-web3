//  tamrin 7 .............................
// تابعی بنویسید که یک آرایه (از نمرات دانشجویان) دریافت می­کند و تعداد دانشجویانی که درس را قبول شده اند (نمره بالاتر از ۱۰) و تعداد دانشجویانی که در درس قبول نشده اند (نمره کمتر از ۱۰) را در قالب یک آبجکت return می­کند.

let findFail = function (arrMark) {
    let number = 0;
    arrMark.forEach(function (item) {
        if (item < 10) {
            number += 1;
        }
    });
    return number;
}


console.log(findFail([1, 13, 10, 9, 5]));

