const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function squareNum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i] ** 2);
    }
}

r1.question('Enter first number: ', (first) => {
    r1.question('Enter second number: ', (second) => {
        r1.question('Enter third number: ', (third) => {
            squareNum(first, second, third);
            r1.close();
        });
    });
});
