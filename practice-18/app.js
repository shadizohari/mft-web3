

// تابع ای بنویسید که  آرایه ای از سالهای تولد دریافت میکند

let age = function (arr) {
    let age = [];
    let fullAge = [];
    for (let i = 0; i < arr.length; i++) {
        age.push(2020 - arr[i]);
        fullAge.push(age[i] >= 18);
        if (fullAge[i]) {
            console.log(`person ${i + 1} is ${age[i]} years old and is full age`)
        } else {
            console.log(`person ${i + 1} is ${age[i]} years old and is not full age`)
        }
    };
    return fullAge;
}
let arrage = [2005, 2006, 2007, 1980];
console.log(age(arrage));


