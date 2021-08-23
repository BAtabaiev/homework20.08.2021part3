//====================================================================================================================
// УРОВЕНЬ 1
// Задание 1
function task1(){
    for ( let i = 1; i <= 3; i++) {
        alert('-')
        console.log('-');
    }
}

//Задание 2
function task2(){
        let n=+prompt('Введите число'); 
        for (let i=1; i <= n; i++) {
            alert('-')
            console.log('-');
        }
}

//Задание 3
function task3(){
    let n=+prompt('Введите число'); 
    addLine(n)
}
function addLine(n){
    for (let i = 1; i <= n; i++) {
        alert('-')
        console.log('-');
    }
}

//Задание 4
function task4(){
    let userNumber1=+prompt('Введите первое число');
    let userNumber2=+prompt('Введите второе число');
    let calcNumbers1=addNumbers(userNumber1, userNumber2);
    let calcNumbers2=subNumbers(userNumber1, userNumber2);
    let calcNumbers3=multNumbers(userNumber1, userNumber2);
    let calcNumbers4=divNumbers(userNumber1, userNumber2);
    if(Number.isNaN(calcNumbers1)){
        return alert('Вы ввели не число')
    } 
    alert(`Сумма Ваших чисел: ${calcNumbers1}  \nРазница Ваших чисел: ${calcNumbers2} \nУмножение Ваших чисел: ${calcNumbers3} \nДеление Ваших чисел: ${calcNumbers4}`)
} 
function addNumbers(userNumber1, userNumber2){ 
    return userNumber1+userNumber2;
}
function subNumbers(userNumber1, userNumber2){
    return userNumber1-userNumber2; 
}
function multNumbers(userNumber1, userNumber2){
    return userNumber1*userNumber2; 
}
function divNumbers(userNumber1, userNumber2){
    return userNumber1/userNumber2; 
   
}


//Задание 5
function task5(){
    let i=prompt('Введите число');
    for(; i; i--){
        alert(i);   
        console.log(i);
    }
}

//=====================================
//Уровень 2
//Задание 1
function task6(){
    let n=+prompt("Введите число")
    let i=+prompt("Введите желаемую степень")
    userPowResault(n,i);
    alert (userPowResault(n,i))
}
function userPowResault(n,i){

    return Math.pow(n,i);
}
//Задание 2

function task7(){
user1000()
}
function user1000(){
    let res = 0;
    for (var i = 1000; i > 50; i = i /2){
        res++;
    }
    alert(`Результат: ${i} \nКоличество делений: ${res}`)
    console.log();
}
// Задание 3

function task8(){
numberUser()
}
function numberUser(){
    let userNumber=+prompt(`Введите число`)
    for (;userNumber < userNumber + 1; userNumber++){
        if(Number.isInteger(userNumber / 11)){
            alert(userNumber)
            return userNumber
        }
    }
       
    while(userNumber < userNumber + 1){
        if(Number.isInteger(userNumber / 11)) break
        userNumber++;
        console.log(userNumber);
    }
   alert(userNumber)
}