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
    [4, 6, 8], ["stroka", 5.7], [0, -100]

];
//Создание массивов в массиве

matrix[1][0] = 90;
//Обращение к определеной информации в массиве отсчет с нуля
console.log(matrix);

for (var i = 100; i > 5; i /= 2) {
    console.log(i);
}
// цикл for(переменная; условие; измененние переменной)
var j = 1000;
while (j >= 100) {
    console.log(j);
    j -= 100;
}
//Одно и тоже чтор цикл for только записывать по другому
var x = 0;
do {
    console.log(x);
    x++;
} while (x < 10);
//одно и тоже что и while, но сначала выполняется код, а потом проверяется условие
for (var z = 10; z <= 20; z++) {
    if (z % 2 == 0)
        continue;
    
    console.log(z);
}
//continue - пропуск числа которое подходит по условию
var mass = [5,7,3,8,9,91];
for(var c = 0; c < mass.length; c++ ) {
    console.log("Элемент " + (c + 1) + ": " + mass[c]);
}
//mass.length- длина массива mass

//alert("Какая хорошая погода!");
//Всплывающии окно с информацией с ондной кнопкой 'Закрыть'
 //var data = confirm("Вы учите js?");
//console.log(data);
//Всплывающие окно с выбором Да Нет и с выводом ответа в консоль
//if(data) {
 //   alert("Вы молодец!");
//}
//Если переменная = true то появится новое окно 'Вы молодец!'
 
//var data = prompt("Скажите сколько вам лет?");
//console.log(data);
//Окно с возможностью ввести возраст который станет равным переменной и выведится в консоль

//var person = null;
//null=ничего
//if(confirm("Вы точно уверены?")) {
//person = prompt("Введите ваше имя");
//alert("Привет, " + person);
//} else {
//alert("Вы нажали на .Отмена. ");
//}

function info(rand) {
    console.log(rand + "!");
}
//Создание функции и её тело которое будет выполнятся при вызывании функции
//В скобочках вводятся параметры(как переменная) которые функция будет принимать, название любое
info("Hello");
//В скобках вводится то что будет выводится
function summa(a, b) {
    var res = a + b;
    info(res);
}
summa(5, 7);

function summas(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    console.log(sum);
}

var array = [6, 8, 1];
var array_2 = [6, 8, 1, 7];
var array_3 = [6, 8, 1, 90];
summas(array);
summas(array_2);
summas(array_3);

var num_4 = 10;
function nevaz() {
    console.log(num_4);
}
nevaz();
//Вывилось потому что переменная является глобальной

function killa() {
    var num_5 = 10;
    console.log(num_5);
}
killa();
//А эта переменная является локальной и она видна только в пределах функции

var counter = 0;

function onClickButton(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter;
    el.style.background = "red";
    el.style.cssText = "border-radius: 5px; border: 2; font-size:20px";
}
//counter++ считается как подсчитывание, например сколько раз нажали на кнопку
//el.innerHTML - el - параметр, innerHtml с помощью него можно внутрь обьекта (button) сможем установить любой текст 

function onInput(el) {
    if(el.value == "Hello")
    alert("И тебе привет!");
  console.log(el.value);
}

var namew = 0;
 var id = setInterval(function() {
namew++;
console.log("Прошло секунд: " + namew);
if(namew == 15)
  clearInterval(id);
}, 1000);
//setInterval (Функция(можно без названия)() { на сколько увеличится переменная, вывод}, интервал милисекунд после которых будет выполнятся код
//в условии сказано что если переменная будет равна 15 то интервал остановится

setTimeout(function() {
console.log("Timer is working");
}, 500);
//одно и тоже что и интервал только не нужно останавливать


var date = new Date();

//console.log(date.getFullYear());
//Вывод сейчашнего года
//console.log(date.getMonth() + 1);
//Вывод сейчашнего месяца, + 1 потому что отсчёт начинается с 0!
date.setHours(23);
//Установление своей даты(можно с минутами, часами и секундами)

var arr_1 = [8,90,5,7,0,8,9];
//console.log(arr_1.length);
//Длина массива
//console.log(arr_1.join("! ! !"));
//Обьеденение символов
//console.log(arr_1.sort().join(", "));
//Сортировка массива с обьеденением символов

class Pers {
    constructor(name, age, happiness) {
        this.nam = name;
        this.ag = age;
        this.hap = happiness;
    }
}
var alex = new Pers('Alex', 45, true);
var bob = new Pers('Bob', 25, false);
console.log(alex.nam);
//Вывод параметра nam обьекта alex
console.log(alex.ag);
//Вывод второго параметра обьекта alex
console.log(alex.hap);
//Вывод третьего параметра обьекта alex
console.log(bob.nam);
//Вывод параметра nam обьекта bob
