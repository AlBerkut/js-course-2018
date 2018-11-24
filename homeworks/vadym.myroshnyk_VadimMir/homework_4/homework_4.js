let num = 10;

// callback
function logNumbers(number) {
    return number + 10;
}

function twoStep(numberTwo) {
    return logNumbers(numberTwo) * 3;
}

function threeStep(numberThree) {
    return twoStep(numberThree) - 20;
}

setTimeout(() => {
    console.log(logNumbers(num));
}, 1000);

setTimeout(() => {
    console.log(twoStep(logNumbers(0)));
}, 2000);

setTimeout(() => {
    console.log(threeStep(num));
}, 3000);


// promise
const promise = new Promise(() => {
    setTimeout(() => {
        console.log(logNumbers(num));
    }, 1000);

    setTimeout(() => {
        console.log(twoStep(logNumbers(0)));
    }, 2000);

    setTimeout(() => {
        console.log(threeStep(num));
    }, 3000);
});

promise
    .then()
    .catch();


// async await
async function logNum() {
    await setTimeout(() => {
        console.log(logNumbers(num));
    }, 1000);

    await setTimeout(() => {
        console.log(twoStep(logNumbers(0)));
    }, 2000);

    await setTimeout(() => {
        console.log(threeStep(num));
    }, 3000);
}

logNum(10)
    .then()
    .catch();
