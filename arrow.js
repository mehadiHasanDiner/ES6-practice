// function doubleIt(num) {
//     return num * 2;
// }

// const result = doubleIt(5);
// console.log(result);

const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

const add = (x, y) => x + y;
const total = add(50, 70);
console.log(total);

const give5 = () => 5;
const fun = give5();
console.log(fun);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 5);
console.log(result3);