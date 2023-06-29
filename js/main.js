function getAge(){
    var yourDate = new Date(document.getElementById("datepiker").value);
    var ageCon = document.getElementById("agetext");
    var nowDate = new Date();
    ageCon.innerHTML = nowDate.getFullYear() - yourDate.getFullYear()
}