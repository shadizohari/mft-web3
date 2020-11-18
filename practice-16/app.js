
// Write a JavaScript function to clean an array from (NaN, false, undefined, null,'').

let cleanArray = function (arr) {
    for (let i = 0; i < arr.length;) {
        if (!arr[i]) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr;
}
console.log(cleanArray([1, null, undefined]));