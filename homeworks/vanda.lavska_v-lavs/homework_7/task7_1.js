const ERRORNEGATIVE = 'number should be positive';
const ERRORNOTNUMBER = 'is not number';

function getRangeNumber() {
    return Math.floor(Math.random() * 51 + 50);
}

function fibonacci(maxValue) {
    if (typeof maxValue !== 'number') throw new Error(ERRORNOTNUMBER);
    if (maxValue < 0) throw new Error(ERRORNEGATIVE);

    const fibArr = [0, 1];
    for (let i = 2; i < maxValue; i++) {
        const res = fibArr[i - 1] + fibArr[i - 2];
        if (res <= maxValue) {
            fibArr.push(res);
        }
    }
    return fibArr;
}

console.log(fibonacci(getRangeNumber()));

module.exports = {
    fibonacci, getRangeNumber, ERRORNEGATIVE, ERRORNOTNUMBER,
};
