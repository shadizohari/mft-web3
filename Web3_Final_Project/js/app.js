let dice = document.querySelector(".dice");
let btnRoll = document.querySelector(".btn-roll");
let player0 = document.querySelector(".player-0-panel");
let player1 = document.querySelector(".player-1-panel");
let name0 = document.getElementById("name-0");
let name1 = document.getElementById("name-1");
let score0 = document.getElementById("score-0");
let score1 = document.getElementById("score-1")
let current0 = document.getElementById("current-0");
let current1 = document.getElementById("current-1");
let btnHold = document.querySelector(".btn-hold");
let btnNew = document.querySelector(".btn-new");
let diceNumber;
let resultCheckWinner = false;
let tbody = document.getElementById("tbody");
let btnRadioDice = document.getElementsByClassName("btn-radio-dice");
// theme color ....................
var root = document.querySelector(':root');
var rootStyle = getComputedStyle(root);
let theme = document.getElementsByClassName("themes");

function addToTable(player0Score, player1Score) {
    tbody.innerHTML += ` <tr>
    <td>Player 0</td>
    <td>${player0Score}</td>
    <td>Player 1</td>
    <td>${player1Score}</td>
</tr>`
}

function insertToTable(player0Score, player1Score) {
    let container = tbody.innerHTML;
    tbody.innerHTML = `<tr>
    <td>Player 0</td>
    <td>${player0Score}</td>
    <td>Player 1</td>
    <td>${player1Score}</td>
</tr>` + container;
}

function addClasstoWinnerInTable() {
    numberWinsPlayer0 = 0;
    numberWinsPlayer1 = 0;
    tbodyChildren = tbody.children;
    for (let i = 0; i < tbodyChildren.length; i++) {
        if (Number(tbodyChildren[i].children[1].textContent) > Number(tbodyChildren[i].children[3].textContent)) {
            tbodyChildren[i].children[0].classList.add("table_winner");
            tbodyChildren[i].children[1].classList.add("table_winner");
            numberWinsPlayer0++;
        } else {
            tbodyChildren[i].children[2].classList.add("table_winner");
            tbodyChildren[i].children[3].classList.add("table_winner");
            numberWinsPlayer1++;
        }
    }
    document.getElementById("numberWinsPlayer0").textContent = numberWinsPlayer0;
    document.getElementById("numberWinsPlayer1").textContent = numberWinsPlayer1;
}

function gameResult(player0Score, player1Score) {
    this.player0Score = player0Score;
    this.player1Score = player1Score;
}

function addToHistory(score0, score1) {
    gameHistory.unshift(new gameResult(score0, score1));
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
}

function checkWinner() {
    if (Number(score0.textContent) > atLeastNumber) {
        name0.textContent = "winner";
        player0.classList.add("winner");
        return true;
    } else if (Number(score1.textContent) > atLeastNumber) {
        name1.textContent = "winner";
        player1.classList.add("winner");
        return true;
    } else {
        return false;
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let gameHistory = JSON.parse(localStorage.getItem('gameHistory'));
if (gameHistory) {
    for (let i = 0; i < gameHistory.length; i++) {
        addToTable(gameHistory[i].player0Score, gameHistory[i].player1Score);
    };
    addClasstoWinnerInTable();
} else {
    gameHistory = [];
}

let diceValue;

for (let i = 0; i < btnRadioDice.length; i++) {
    if (btnRadioDice[i].getAttribute("name") == "dice" && btnRadioDice[i].checked) {
        diceValue = i + 1;
        break;
    } else {
        diceValue = 1;
    }
}

let atLeastNumber;
let gameEndPoint = document.getElementById("gameEndPoint");
if (gameEndPoint.value) {
    atLeastNumber = Number(gameEndPoint.value);
} else {
    atLeastNumber = 20;
}

gameEndPoint.addEventListener("input", function (e) {
    if (e.target == gameEndPoint && gameEndPoint.value) {
        atLeastNumber = Number(gameEndPoint.value);
    } else {
        atLeastNumber = 20;
    }
})

document.addEventListener("click", function (e) {
    // button roll dice .........................................
    if (e.target == btnRoll) {
        if (!resultCheckWinner) {
            diceNumber = randomNumber(1, 6);
            dice.src = `img/dice-${diceNumber}.png`;
            if (diceNumber != diceValue) {
                if (player0.classList.contains("active")) {
                    current0.textContent = Number(current0.textContent) + diceNumber;
                } else {
                    current1.textContent = Number(current1.textContent) + diceNumber;
                }
            } else {
                if (player0.classList.contains("active")) {
                    current0.textContent = 0;
                } else {
                    current1.textContent = 0;
                }
                player0.classList.toggle("active");
                player1.classList.toggle("active");

            }
            resultCheckWinner = checkWinner();
            if (resultCheckWinner) {
                addToHistory(Number(score0.textContent), Number(score1.textContent));
                insertToTable(Number(score0.textContent), Number(score1.textContent));
                addClasstoWinnerInTable();
            }

        }
    }
    // button hold .........................................
    if (e.target == btnHold) {
        if (!resultCheckWinner) {
            dice.src = "";
            if (player0.classList.contains("active")) {
                score0.textContent = Number(current0.textContent) + Number(score0.textContent);
                current0.textContent = 0;
            } else {
                score1.textContent = Number(current1.textContent) + Number(score1.textContent);
                current1.textContent = 0;
            }
            player0.classList.toggle("active");
            player1.classList.toggle("active");
            resultCheckWinner = checkWinner();
            if (resultCheckWinner) {
                addToHistory(Number(score0.textContent), Number(score1.textContent));
                insertToTable(Number(score0.textContent), Number(score1.textContent));
                addClasstoWinnerInTable();
            }
        }
    }
    // button new game .........................................
    if (e.target == btnNew) {
        resultCheckWinner = false;
        dice.src = "";
        current0.textContent = 0;
        score0.textContent = 0;
        current1.textContent = 0;
        score1.textContent = 0;
        player0.classList.add("active");
        player1.classList.remove("active", "winner");
        player0.classList.remove("winner");
        name1.textContent = "Player 1";
        name0.textContent = "Player 0";
    }
    // theme color .........................................
    for (let i = 0; i < theme.length; i++) {
        if (e.target == theme[i]) {
            root.style.setProperty('--theme_color', rootStyle.getPropertyValue(`--th${i}`));
            break;
        }
    }

});

// change dice .........................................
document.addEventListener("change", function (e) {
    for (let i = 0; i < btnRadioDice.length; i++) {
        if (e.target == btnRadioDice[i] && btnRadioDice[i].checked && btnRadioDice[i].getAttribute("name") == "dice") {
            diceValue = i + 1;
            break;
        }
    }
})



