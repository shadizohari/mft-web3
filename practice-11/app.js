
// Write a JavaScript function to get an array and Passing a parameter 
// 'n' will return the first 'n' elements of the array.

let extractArray = function (arr, n) {
    if (n < arr.length + 1) {
        let extract = [];
        for (let i = 0; i < n; i++) {
            extract.push(arr.shift());
        }
        return extract;
    } else {
        return "input its not valid"
    }
}
console.log(extractArray([1, 3, 4, 5, 6, 8], 3));
console.log(extractArray([1, 3, 4, 5, 6, 8], 7));


