
// Write a JavaScript program to sort the items of an array.

function bubbleSort(arr) {

    for (let sorted = false; !sorted;) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2, 5, 7, 1, 4]));
console.log(bubbleSort([1, 2, 3, 4, 5]));