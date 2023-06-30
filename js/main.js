function getAge(){
    var yourDate = new Date(document.getElementById("datepiker").value);
    var ageCon = document.getElementById("agetext");
    var nowDate = new Date();
    var age = nowDate.getFullYear() - yourDate.getFullYear();
    ageCon.innerHTML = age + GetAgeStr(age);
}

function GetAgeStr(age){
    return " " + declOfNum(age, [' год', ' года', ' лет']);
}

function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}
var declension = ['год', 'года', 'лет'];