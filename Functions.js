
function isEven(numb) {
    if (numb % 2 === 0) {
        return numb + " is even";
    } else {
        return numb + " is odd";
    }
}
const isEven2 = (numb) => {
    if (numb % 2 === 0) {
        return "is even";
    } else {
        return "is odd";
    }
}

console.log(isEven(1));
console.log(isEven(2));

console.log(isEven2(3));
console.log(isEven2(4));