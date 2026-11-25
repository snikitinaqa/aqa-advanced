//for
const number = 5;

console.log("--- for ---");
for (let i = 1; i <= 10; i++) {
    //template literal
    console.log(`${number} x ${i} = ${number * i}`);
}

//while
console.log("--- while ---");
let f = 0.7;
while (f <= 10) {
    console.log(`${number} x ${f} = ${number * f}`);
    f++;
}