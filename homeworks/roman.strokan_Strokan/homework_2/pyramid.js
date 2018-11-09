const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputVal();

// Ввод данных
function inputVal()
{
    rl.question('Введите высоту пирамиды (макс. 15): ', strCount => {
        inputValidation(strCount);
    });
}
// Проверка и валидация
function inputValidation(strCount)
{
    if (strCount > 15 || strCount < 0 || strCount =='' /*|| typeof strCount != 'number'*/)
    {
        console.log('Введенные данные не являются числом или находятся вне допустимого диапазона!');
        console.log('Попробуйте еще раз.');
        inputVal();
    }
    else showPyramid(strCount);
    
}

// Вывод пирамиды
function showPyramid(strCount)
{
    var myStr = '##';
    var myStr2 = ' ';
    var a = strCount;
    for (i=0; i<strCount;i++)
    {
        console.log(myStr2.repeat(a)+myStr.repeat(i+2));
        a-=1;
    }
    rl.close();
}