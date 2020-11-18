
// Write a simple JavaScript program to join all elements of the following array into a string.

let arrToString = function (arr) {
    let string = "";
    arr.forEach(function (item) {
        // string = string + item + ',';
        string = string.concat(item);

    });
    return string;

}
console.log(arrToString(["s", "h", "a", "d", "i"]));