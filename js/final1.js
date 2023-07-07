//Однострочный комментарий
/*  
Многострочный
комментарий
*/
//console.log("JS say hello!");
//Вывод информации в консоль
console.info("JS say hello!");
//Вывод информации в консоль
console.error("JS say hello!");
//Вывод информации в консоль в виде ошибки
console.warn("JS say hello!");
//Вывод инф. в консоль в виде предупреждения
var figure = 5;
//Создание и присвоение чего либо к переменной
figure = 7;
//Переопределение значения переменной
console.log("Переменная: " + figure + ".");
//+ =обьеденение строк
const num = 15;
//Та же переменная но без возможности переопределить
var word;
word = "Words";
var torf;
torf = true;
var num_1 = 5.4;
var num_2 = 15;
console.log("Результат: " + (num_1 - num_2));
//Сначала выполняется действие внутри скобок
console.log("Результат: " + (num_1 % num_2));
//Остаток от деления

var num_3 = 5;
num_3 = num_3 + 7;
//Переопределение переменной с сложением
console.log("Результат: " + num_3);
num_3 += 7;
//Сокращённая форма переопределения с сложением
console.log("Результат: " + num_3);
//Получилось 19 из за предыдущих действий
num_3++;
//++ это добавление единицы к переменной
console.log("Ркзультат: " + num_3);
num_3--;
//-- это вычитание единицы из переменной
console.log("Результат: " + num_3);

var srt_1 = Number("12");
var srt_2 = Number("2");
console.log("Результат: " + (srt_1 + srt_2));

console.log("Math: " + Math.PI);
//Вывод числа ПИ
console.log("Math: " + Math.min(4, 6, 7, 9, 12));
//Вывод минимального числа
console.log("Math: " + Math.max(4, 6, 7, 9, 12))
//Вывод максимального числа

var number = 15;
if (number != 15) {
    console.log("Ok!");
} else if (number < 10) {
    console.log("Ok!");
}
else if (number == 7) {
    console.log("Ok!");
}
else if (number >= 15) {
    console.log("Ok!")
}
else {
    console.log("Error!");
}
//Условие и то что будет выполнятся при его истине
//'!=' - не равно

var isHasHouse = true;
if (number == 5 || isHasHouse == true) {
    console.log("Very ok!");
}
// '||' - это знак или

if (number == 5 && isHasHouse == true) {
    console.log("Nice!");
}
else {
    console.log("Bad!");
}
// '&&' -это знак и

var stroka = true;
switch (stroka) {
    case "4":
        console.log("stroka равна 4!");
        break;
    case "45":
        console.log("stroka равна 45!");
        break;
    case "word":
        console.log("stroka равна word!");
        break;
    case true:
        console.log("stroka равна истине!");
        break;
    default:
        console.log("Default");
}
//Одно и тоже что и if и else
// case-случай, default-искл, break-окончание строки case
// Но можно проверять только на значения!!!, >, <,=,!= - нельзя

var arr = [5, true, "stroka", 5.7, 0, -100];
//Массив данных
arr[3] = "word";
//Обращение и переопределение элемента из массива
console.log(arr[0]);
//Вывод элемента массива, отсчет с нуля
console.log(arr.length);
//Вывод длины массива
var matrix = [
    [4,6,8], ["stroka", 5.7], [0, -100]
    
];
//Создание массивов в массиве

matrix[1] [0] = 90;
//Обращение к определеной информации в массиве отсчет с нуля
console.log(matrix);