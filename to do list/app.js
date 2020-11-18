let val = document.getElementById("toInter");
let ul = document.querySelector("ul");
let enter = document.querySelector(".enter")
let newDo;

val.addEventListener("input", function (e) {
    newDo = e.target.value;
})

let toAdd = function () {
    let li = document.createElement("li");
    ul.appendChild(li);

    let div = document.createElement("div");
    li.appendChild(div);
    div.classList.add("parent-flex");

    let checkbox = document.createElement("input");
    checkbox.classList.add("check-box");
    checkbox.type = "checkbox";
    div.appendChild(checkbox);

    let text = document.createElement("p");
    text.style.display = "inline-block";
    text.textContent = newDo;
    div.appendChild(text);

    let clearUp = document.createElement("button");
    clearUp.classList.add("icon-bin", "btn", "delete");
    li.appendChild(clearUp);

    clearUp.addEventListener("click", function (e) {
        e.target.parentElement.remove();
    })

    checkbox.addEventListener("input", function (e) {
        if (e.target.checked) {
            text.classList.add("line");
        } else {
            text.classList.remove("line"); 
        }

    })
}

val.addEventListener("keyup", function (e) {
    if (e.target.value && e.key == "Enter") {
        toAdd();
        e.target.value = "";
    }
})

enter.addEventListener("click", function (e) {
    if (val.value) {
        toAdd();
        val.value = "";
    }

})



// val.addEventListener("keydown", function (e) {
//     let word = e.target.value.split(" ");
//     word.forEach(function (item, index) { 
//         if (!item) {
//             word.splice(index, 1);
//         }
//     })
//     word.forEach(function (item, index) {   
//         if (item.length > 20) {
         
//         }


//     })
// })
