function madeAddr(x) {
    return function (y) {
        return x + y;
    }
}

const add3 = madeAddr(3);
console.log(add3(2)) // 5;

const add7 = madeAddr(7);
console.log(add7(2)) // 9;
console.log(add3(10)) // 13;