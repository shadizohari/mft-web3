let inputTitle = document.getElementById("title");
let inputAuthor = document.getElementById("author");
let inputISBN = document.getElementById("ISBN");
let submit = document.getElementById("submit");
let table = document.querySelector("table");
let form = document.querySelector("form");

let books = function (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

let alert = function (color, text) {
    let div = document.createElement("div");
    div.classList.add("alert", color);
    div.textContent = text;
    document.querySelector(".container").appendChild(div);
}

let addToTable = function (title, author, isbn) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let i = 0; i < 4; i++) {
        let td = document.createElement("td");
        if (i == 0) {
            td.textContent = title;
        }
        if (i == 1) {
            td.textContent = author;
        }
        if (i == 2) {
            td.textContent = isbn;
        }
        if (i == 3) {
            td.classList.add("remove", "icon-bin");
            td.addEventListener("click", function (e) {
                e.target.parentElement.remove();
                for (i = 0; i < booksList.length; i++) {
                    if (booksList[i].title == e.target.parentElement.children[0].textContent &&
                        booksList[i].author == e.target.parentElement.children[1].textContent &&
                        booksList[i].isbn == e.target.parentElement.children[2].textContent) {
                        booksList.splice(i, 1);
                        localStorage.setItem('booksList', JSON.stringify(booksList));
                        alert("alert-success", "Removed Successfully");
                        setTimeout(function () { document.querySelector(".alert").remove() }, 1000);
                        break;
                    }
                }
            })
        }
        tr.appendChild(td);
    }
}

let capitaizeFirstLetter = function (inputString) {
    let inputWordsArray = inputString.split(" ");
    let capitalsArray = [];
    let result = "";
    inputWordsArray.forEach(word => {
        if (word) {
            capitalsArray.push(word.replace(word[0], word[0].toUpperCase()));
        }
    });
    for (let i = 0; i < capitalsArray.length; i++) {
        if (i != capitalsArray.length - 1) {
            result += capitalsArray[i] + " ";
        } else {
            result += capitalsArray[i];
        }
    }
    return result;
}

let booksList = JSON.parse(localStorage.getItem('booksList'));
if (booksList) {
    for (let i = 0; i < booksList.length; i++) {
        addToTable(booksList[i].title, booksList[i].author, booksList[i].isbn);
    };
} else {
    booksList = [];
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (inputTitle.value && inputAuthor.value && inputISBN.value) {
        booksList.push(new books(capitaizeFirstLetter(inputTitle.value), capitaizeFirstLetter(inputAuthor.value),inputISBN.value));
        localStorage.setItem('booksList', JSON.stringify(booksList));
        addToTable(capitaizeFirstLetter(inputTitle.value), capitaizeFirstLetter(inputAuthor.value), inputISBN.value);
        inputTitle.value = "";
        inputAuthor.value = "";
        inputISBN.value = "";
        alert("alert-success", "Added successfully");
        setTimeout(function () { document.querySelector(".alert").remove() }, 1000);
    } else {
        alert("alert-danger", "Please Fill Out All Fields");
        setTimeout(function () { document.querySelector(".alert").remove() }, 1000);
    }
})


