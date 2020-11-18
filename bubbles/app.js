let ray;
let topBody;
let leftBody;
let indexColor;
let body = document.querySelector("body");
let colorCircle = ["#ffb6b9",  "#bbded6", "#8ac6d1", "#f67280", "#ffc785"]
let random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let creatCircle = function () {
    let div = document.createElement("div");
    div.classList.add("circle");
    div.style.width = `${ray}px`;
    div.style.height = `${ray}px`;
    div.style.backgroundColor = colorCircle[indexColor];
    div.style.top = `${topBody}px`;
    div.style.left = `${leftBody}px`;
    body.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 800);
}

body.addEventListener("click", function (e) {
    ray = random(50, 150);
    topBody = e.clientY - (ray / 2);
    leftBody = e.clientX - (ray / 2);
    indexColor = random(0, colorCircle.length - 1);
    creatCircle();
})

