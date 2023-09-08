const array = new Array();

for(let i = 0; i < 6; i++) {
    array.push(Math.ceil(Math.random() * 100));
}

array.forEach((number) => {console.log(number)});

array.sort((a, b) => {
    return b - a;
});

console.log(array);