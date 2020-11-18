// تابعی بنویسید که یک آرایه از اعداد دریافت کرده و توان دو آن اعداد را در قالب آرایه دیگری return  می­کند.

let secondPower = function (arrNumber) {
    let itemSecondPower;
    let arrSecondpower = [];
    arrNumber.forEach(function (item) {
        itemSecondPower = item * item;
        arrSecondpower.push(itemSecondPower);
    });
    return arrSecondpower;
}

console.log(secondPower([1, 2, 3]));


