let price = document.getElementById("price");
let tip = document.getElementById("tip");
let numberCustomers = document.getElementById("number-customers");
let valuePrice;
let valueTip = 0;
let valuePersonNumber = 1;
let button = document.querySelector("button");
let h5 = document.querySelectorAll("h5");
let bill;
let account = document.querySelector(".account");
let ripple = document.querySelector(".parent-ripple");

price.addEventListener("input", function (e) {
    valuePrice = Number(e.target.value);
})

tip.addEventListener("input", function (e) {
    valueTip = Number(e.target.value);
})

numberCustomers.addEventListener("change", function (e) {
    valuePersonNumber = Number(e.target.value);
    h5[0].textContent = valuePersonNumber;
});

button.addEventListener("click", function () {
    if (valuePrice >= 0) {
        bill = (valuePrice + (valuePrice * valueTip / 100)) / valuePersonNumber;

        if (bill != Math.ceil(bill)) {
            bill = bill.toFixed(3)
        }

    } else {
        bill = "Input not valid";
    }
    let pay = document.querySelector("h6 span");
    pay.textContent = ` ${bill}`;

    ripple.style.opacity = 1;
    account.style.opacity = 0;
    setTimeout(function () {
        ripple.style.opacity = 0;
        account.style.opacity = 1;
    }, 1500)
});
