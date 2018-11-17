function riseToDegree(a) {
    return a * a;
}
console.log(riseToDegree(5));
console.log(riseToDegree(15));
console.log(riseToDegree(53));

function sumOfArray(newArr) {
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        const element = newArr[i];
        sum += element;
    }
    console.log(sum);
    return sum;
}
function powToArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(riseToDegree(arr[i]));
    }
    console.log(newArr);
    sumOfArray(newArr);
    return newArr;
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Max value ', (answer) => {
    rl.question('Step ', (answer2) => {
        const arr = [];
        const step = +answer2;
        const size = +answer;
        for (let i = 0; i <= size; i += step) {
            arr.push(i);
        }
        console.log(arr);
        const newArr = arr.map(powToArray(arr));
        const result = newArr.reduce(sumOfArray(newArr));
        console.log(newArr);
        console.log(result);

        rl.close();
    });
});
