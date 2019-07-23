'use strict';

//Анонимная функция
function ask(question , yes , no){
    if(confirm(question)){
        yes();
    }else
    {
        no();
    }
}

function showOk(){
    console.log('Вы согласились');
}

function showCancel(){
    console.log('Вы отменили выполнение');
}

ask ('Вы согласны?',showOk,showCancel);

function ask2(question, yes ,no){
    if(confirm(question))yes()
    else no();
}

ask2(
    'Вы согласны?',
    function(){
        console.log('Вы согласились');},
    function(){console.log('Вы отказались');}   
);

//new Function

let sum=new Function('a , b','return a+b;');//параметры+тело функции return возвращает значение

let result =sum (1,2); //3

//Рекурсия-код выполняет сам себя пока не достигнет результата,для вычесления сложных функций,занимает много времени работы компьютера
//Каждая рекурсия может быть переведена в цикл-будет быстрее.
//Окончание рекурсии-базис
//n-количество ретораций

function pow(x, n){
if(n!=1){
    return x*pow(x,n-1);//2*2*2
}

else{
    return x;//2
}

}
console.log(pow(2,3));//8

console.log(pow(2,70) );

//Контекст выполнения,стек
//Стек-процессор работает с многими стеками(столбик-ячейки)
/*

1) pow(2,3)=2*2*2 Контекст выполнения
2) pow(2,2)=2*2
3) pow(2,1)=2

*/

//Именованные функциональные выражения-имя даем не только через переменную

let func1=function(){}; //функциональное выражение

let func2=function sayHi(name){// именованное функциональное выражение
    //sayHi='текст';//именованную функцию нельзя переназначить
    console.log(sayHi);
};

func2();//выведет код себя же

//sayHi(); будет ошибка-Именновая функция недоступна извне




//Введение в методы и свойства

let str='Привет';
console.log(str.length); //6

for(let i=0; i<str.length; i++){
    if(i == 'в'){
        console.log (i);
    }
}

//Метод toUpperCase

str= str.toUpperCase();//ПРИВЕТ

//Метод tofixed

let num1=12.345;

console.log(num1.toFixed(0));//'12'- округление количество цифр до точки,превращает в текст

//Числа

//Способы записи числа

console.log(0xFF);// 255
console.log( 3e5);//300000
console.log( 3e-5); //0.00003

isFinite(1);//true//проверка на бесконечность
isFinite(Infinity);//false
//Проверяет значение если оно не равно NaN/Infinity/-Infinity

//Мягкое преобразование

console.log( +'12px');//NaN

console.log(parseInt('12px') );//12

console.log( parseFloat('12.3.2') );//12.3 по синтаксису дробного числа не может быть две точки,он ее обрежет

console.log(parseInt('FF',16) );//255 - ff-в шестнадцетиричной форме 255

//Проверка на число

console.log( isNaN('-11.5') );//Сначала преобразует в число,а потом вернет true, если это NaN

function isNumeric(n){
    return !isNaN(parseFloat(n))&& isFinite(n);
}

//Преобразование toString

let k=255;

console.log(k.toString(16) );//FF

//Округление 

console.log( Math.floor(3.1) );//3 Округление вниз
console.log( Math.ceil(3.1) );//4 Округление вверх
console.log( Math.round(3.1) );//3 Округление до ближайшего целого

//Округление до заданой точности

let b=3.456;

console.log(Math.round(b*100) /100);//Округление на два знака до запятой 3,456 преобразуется в 345,6 > 346 >3.46


b=12.34;
console.log(b.toFixed(1) );//'12.3'fixed преобразовывает в текст

b=12.36;

b.toFixed(1);//'12.4'

b.toFixed(5);//'12.36000'
console.log( +b.toFixed(5) );//12.36

let price=6.35;

console.log( price.toFixed(1) );//6.3

console.log( Math.round(price*10)/10);//6.4

//Неточные вычесления

console.log(0.1+0.2==0.3);//false

console.log(0.1+0.2);//0.30000000000000004

console.log(0.1+0.2>0.3);//true

console.log(0.1.toFixed(20) ); //ограничивается в 8 байт

//1 способ округления

console.log(0.1*10+0.2*10)/10 ; //0.3

//2 способ округления

let result2= 0.1+0.2;
console.log(+result2.toFixed(10) ); //0.3

console.log( 99999999999999999 );//потеря данных на единицу





