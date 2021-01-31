const age = [12, 13, 14, 16, 17, 16];
const age2 = [15, 17, 16];
const age3 = [25, 36, 34, 27, 30, 29];
// const allAge = [age, age2, age3];
const allAge = [...age, ...age2, ...age3];
console.log(allAge);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250];
const maximum = Math.max(...takaPoisha);
console.log(maximum);
