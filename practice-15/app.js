
// Write a JavaScript program which accept a string as input and swap the case of each character.
//  For example if you input 'Hello World' the output should be 'hELLO wORDLD'.

let changer = function (x) {
    let y = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] === x[i].toLowerCase()) {
            y = y.concat(x[i].toUpperCase());
        } else {
            y = y.concat(x[i].toLowerCase());
        }

    }
    console.log(y);
}
changer("salAm");