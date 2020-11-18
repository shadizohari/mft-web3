
// Write a JavaScript function to get an array and Passing a parameter
//  'n' will return the last 'n' elements of the array.
let lastExtractArray = function (arr, n) {
    if (n < arr.length + 1) {
        let extract = [];
        for (let i = 0; i < n; i++) {
            extract.unshift(arr.pop());
        }
        return extract;
    } else {
        return "input is not valid";
    }
}
console.log(lastExtractArray([1, 3, 4, 5, 6, 8], 3));
console.log(lastExtractArray([1, 3, 4, 5, 6, 8], 7));