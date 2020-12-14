var leftBorderWidth = 1;
{
    let variables = 3; //данная переменная будет видна толко в цикле
}

//var устаревшачя переменная
//let новая переменная

let second = 2;
const pi = 3.14; //константа

console.log(second); //выводит в консоль переменную
var number = 5;
var string = "Hello";
var sym = Symbol();
null;
undefined; //нет значения т.е. не присвоено переменной ничего
var obj = {};
let something;
console.log(4/0);
console.log('string'*9);
console.log(something);

let persone = {
    name: "Jon",
    age: 20,
    isMarried: false
};

//несколько вариантов как обратиться к нужному полю
console.log(persone.name); 
console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp']; //создать массив
console.log(arr[0]); //вывод массива по индексу

//alert("Hello world"); //предупреждение выводиит окно в браузере, и приостанавливает выполнение других скриптов
// let answer = confirm("Are you here?"); //выводит вопрос в браузере через окно (ОК или ОТМЕНА)
// console.log(answer);


// let answer = prompt("Есть ли вам 18?", "Да"); //выводит вопрос в браузере через окно (ОК или ОТМЕНА)
// console.log(typeof(answer)); //через typeof узнаем какой тип данных

// console.log(typeof(arr)); // вывод типа данных массива
// console.log(typeof(null)); // признааня ошибка


// console.log("arr" + " - object"); //конкатенация 
// console.log(4 + " - object");  // конкатенация 

let incr = 10,
    decr = 10;

// incr++;
// decr--;

//преффексная и пофикстная форма работают по разному
// console.log(incr++);
// console.log(++incr);

// console.log(decr--);
// console.log(--decr);

console.log(5%2); //остаток от деления на 2
console.log("2" == 2); //два занака == сравнивает по значению (будут тру)
console.log("2" === 2); // три знака === строгое сравнение не только по значению но и по типам данных


let isChecked = true,
    isClose = true;

console.log(isChecked && isClose); //оператор и тру
isClose = false;
console.log(isChecked && isClose); //оператор и фолс

console.log(isChecked || isClose); //оператор или

console.log(isChecked || !isClose); // ! знак отрицания

///////////////2.8///////////////////

if (2*4 == 8){
    console.log("Верно!")
} else{
    console.log("Неверно!")
}

let num = 50;

if(num < 49){
    console.log('Не верно!')
} else if (num > 100){
    console.log('Много')
} else{
    console.log("Верно!")
};

(num == 50) ? console.log('Верно!') : console.log('Неверно'); //сокращенная запись

switch (num) {
    case num < 49:
        console.log('Не верно!');
        break;

    case num > 100:
        console.log('Много!');
        break;

    case 50:
        console.log('Верно!');
        break;
    default:
        console.log("Что-то пошло не так");
        break;    
}

////////////////////2.9 Цыклы //////////////////////
while(num < 55) {
    console.log(num);
    num++;
}


//let num = 50;
do {
    console.log(num);
    num++;
}
while(num < 55);

for (let i = 1; i < 8; i++){
    if(i==6){ //в данном куске кода идет прерывание цикла
        continue
    }
    console.log(i);
}


































