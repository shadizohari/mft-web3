
// تابعی بنویسید که یک ارایه و یک رشته دریافت میکند.
//  سپس بررسی میکند که آیا هیچ یک از اندیس های آرایه شامل رشته ارسال است یا خیر، اگر بود true  برمیگرداند و اگر نبود false .

let find = function (arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            return true;
        }
    }
    return false;
}
console.log(find(["shadi", "salam", "shadi"], "no"));

