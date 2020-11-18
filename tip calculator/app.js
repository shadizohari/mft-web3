let inputs = document.querySelectorAll("input");
let price;
let tip = 50;
let personNumber = 1;
let bill;

inputs[0].addEventListener("input", function (e) {
    price = Number(e.target.value);

})

let percent = document.querySelectorAll("h2");

inputs[1].addEventListener("change", function (e) {
    tip = Number(e.target.value);
    percent[0].textContent = tip + "%";
});

inputs[2].addEventListener("change", function (e) {
    personNumber = Number(e.target.value);
    percent[1].textContent = personNumber;
});

let button = document.querySelector("button");
button.addEventListener("click", function () {
    if (price) {
        bill = (price + (price * tip / 100)) / personNumber;
    } else {
        bill = 0;
    }
    let pay = document.querySelector("h4 span");
    pay.textContent = ` ${bill}`;
});
 
