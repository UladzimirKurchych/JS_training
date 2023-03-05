// document.write('просмотрсодержимого объекта');
// console.log('вывод в консоль');
// console.info('вывод информации в консоль');
// console.error('вывод ошибки');
// console.warn('уведомление, предупреждение');

//document.write("asdf"); вывод на страницу, устаревшая команда!!!

/*                                  Условное ветвление - if else

let number = 1;
let isHasHouse = false;

if(number == 10 || !isHasHouse) {
	console.log('Ok!');
} else if(number > 10) {
	console.log( '>10');
} else if(number < 10) {
	console.log('<10');
} else {
console.log('Else!');
}
*/

/*                                  Условное ветвление - switch
                                                         case
                                                         break
                                                         default

let stroka = "word";
switch(stroka) {
	case "4":
		console.log(4);
	break;
	case "5":
		console.log(5);
	break;
	case "word":
		console.log("word");
		break;
	default:
		console.log("Default");
	break;
}
*/

/*                                   Условный оператор - ?

let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';


let login;

let message = (login == 'Сотрудник') ? 'Привет' :
 (login == 'Директор') ? 'Здравствуйте' :
 (login == '') ? 'Нет логина' :
 '' ;
console.log(message);
alert( message );
*/


/*                                   Логические операторы  ||(ИЛИ),  &&(И),  !(НЕ),  ??(ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ)  

                                              || (ИЛИ)

alert(true || true);     //true
alert(true || false);    //true
alert(false || true);    //true
alert(false || false);   //false

let hour = 19;
if (hour < 9 || hour > 18) {
	alert('Закрыто');
} else {
	alert('Открыто');
}

let hour = 10;
let isWeekend = true;
if (hour < 9 || hour > 18 || isWeekend) {
	alert('Офис закрыт');
}

let currentUser = null;
let defaultUser = 'Uladzimir';
let name = currentUser || defaultUser || 'unnamed';
alert(name);
let x;
false || (x = 2);
alert(x);
*/

/*                                   Вывод на экран символов из кодировки ASCII
console.log(String.fromCharCode(126));
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));
*/

/*                                         && (И)


alert(true && true);      //true
alert(true && false);     //false
alert(false && true);     //false
alert(false && false);    //false


let hour = 12;
let minuten = 30;
if ( hour == 12 && minuten == 30 ) {
	alert('Время - 12:30');
}

let result = 1 && 3;   //ищет первое ложное значение, если не находит выводит последнее
console.log( result ); //3
*/

/*                                        ! (НЕ)

alert( !true);  //false
alert( !false); //true
alert( !0);     //true

alert( !!"string" );    //true
alert( !!null);         //false
*/
/*
let age = 14;
if ( !!age <= 14 || !!age >= 90 ) {
alert('Вы нам не подходите');
}*/


/*                                  ?? (ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ)


let firstName = null;
let lastName = null;
let nickName = 'Superman';

//показывает первое истинное значение
alert(firstName ?? lastName ?? nickName ?? 'Anonimus'); //выведет Superman
// - возвращает первое истинное значениеж
?? - возвращает первое определенное значение
*/


/*                                 Циклы while и for


while (condition) {
// код, выполняется до тех пор пока значение (condition)-истинно
// "тело цикла"
}

let a = 0;
while ( a < 3 ) { //выводит 0, затем 1, затем 2     Одно выполнение "тела цикла" есть "итерация"
	alert(a);
	a++;
}

                                 "do...while"

do { 
	//"тело цикла"
} while (condition)

                                   "for"

for (начало; условие; шаг;)
*/

/*                             Прерывание цикла, специальная директива break


let sum = 0;

while (true) {
	let value = +prompt('Введите число', '');
	if (!value) break;
	sum += value;

}
alert( 'Сумма = ' + sum);



                               Переход к следующей итерации: директива continue


for (let i = 0; i < 10; i++) {

	if (i % 2 == 0) continue;
	alert( i );
}


                              Метки для break / continue



outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');

    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

    // сделать что-нибудь со значениями...
  }
}


for (let i = 0; i < 3; i++) {
outer: for (let j = 0; j < 3; j++) {
		let input = prompt(`Значение с координатами (${i},${j})`, '')
		if (!input) break outer;
	}
}
alert('Ready!');


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue nextPrime;
	}
	alert(i);
}

                             Конструкция "switch"



let i = prompt('Как зовут нашу кошку?', '');

switch ( i ) {
	case ('Варвара'):
		alert('Не верно');
		break;
	case 'Глафира':
		alert('Снова мимо');
		break;
	case 'Анфиса':
		alert('Правильно!!!');
		break;
	case 'Никифор':
		alert('Ты совсем дурак?))')
		break;
	default:
		alert('Ни одно имя не подошло, увы ((');
}



//без break
let i = prompt('Как зовут нашу кошку?')

switch ( i ) {
	case ('Варвара'):
		alert('Не верно');
	case 'Глафира':
		alert('Снова мимо');
	case 'Анфиса':
		alert('Правильно!!!');
	case 'Никифор':
		alert('Ты совсем дурак?))')
	default:
		alert('Ни одно имя не подошло, увы ((');
}

//группировка "case"
let a = 3;

switch ( a ) {
	case ( 1 ):
		alert('no  right');
		break;
	case ( 2 ):
	case ( 3 ):
		alert('right');
		alert ('all right');
		break;
	case ( 4 ):
		alert('no no right');
	
	default:
		alert('Error');
}


switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


let browser = prompt('Каким браузером Вы пользуетесь?', '');

if (browser === 'Edge') {
	alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
	alert("Okay we support these browsers too");
} else {
	alert("We hope that this page looks ok!");
}


const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}


const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
	case( '0' ):
		alert('Вы ввели число 0');
		break;
	case( 1 ):
		alert('Вы ввели число 1');
		break;
	case( 2 ):
	case( 3 ):
		alert('Вы ввели число 2 или 3');
		break;
}

                                             Массивы Arrays

let arr;
arr = ['a', 'b', 'c'];
arr = [1, 2, 3];
arr = [1, 2, 3, 'a', 'b', 'c', null, true, false];
alert(arr);
console.log(arr);

const arr = [1, 2, 3];
arr.push(4);//                  добавляет в конец массива элемент
console.log(arr);

const arr1 = ["a", "b", "c"];
const arr2 = arr1.pop();//      удаляет последний элемент из массива и возвращает этот элемент
console.log(arr2);
console.log(arr1);

const arr3 = [1, 2, 3];
const arr4 = arr3.shift();//    удаляет первый элемент из массива
console.log(arr4);
console.log(arr3);
console.log(arr3.length);

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");//    добавляет элементы в начало массива (! push)

let arr = ['1', 2, 3];
arr[4] = '!';
console.log(arr);
console.log(arr.length);

let arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr);
console.log(arr.length);

                                Оператор delete в массивах


let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[1];
delete arr[4];
console.log(arr);
console.log(arr.length);


                                      Цикл for
let answers = [],
		questions = [
			'Как Вас зовут',
			'Какая у Вас фамилия?',
			'Сколько Вам лет?'
		];

for (let i = 0; i < questions.length; i++) {
		answers[i] = prompt(questions[i], '');
}
console.log(answers);

                                      Цикл do...while

let answers = [],
		questions = [
			'Как Вас зовут',
			'Какая у Вас фамилия?',
			'Сколько Вам лет?'
		],
		i = 0;

do {
	answers[i] = prompt(questions[i]);
	i++;
} while ( i < questions.length );
console.log(answers);

                                    Цикл while

let answers = [],
		questions = [
			'Как Вас зовут',
			'Какая у Вас фамилия?',
			'Сколько Вам лет?'
		],
		i = 0;

while ( i < questions.length ) {
	answers[i] = prompt(questions[i], '');
	i++;
}
console.log(answers);

                                    Functions  Функции


function имя(параметры) {
  ...тело...
}



function checkAge(age) {
	if(age >= 18) {
		return true;
	} else {
		return confirm('А родители разрешили?');
	}
}
let age = prompt('Сколь Вам лет?', 18);
if (checkAge(age)) {
	alert('Вход открыт!');
} else {
	alert('Вход закрыт!');
}


hello();

function hello() {
	console.log('Hello');
	calc();
	function test() {
		console.log('test');
	}
	test();
}

function calc() {
	let a = 1;
	let b = 3;
	console.log( a + b );
}
function calc() {      // переопределение функции
	let a = 2;
	let b = 3;
	console.log( a + b );
}


function randomInt() {
	const min = 100;
	const max = 200;
	let rand = Math.floor(min + Math.random() * (max + 1 - min));
	console.log(rand);
}
randomInt();
randomInt();
console.log( randomInt );

function count() {
	let c = 5;
	c++;
	console.log(c);
}
count(); // результат 6 
count(); // результат 6  -с каждым вызовом функция запускает код заново (не перезаписывает переменную, при условии, что переменная объявлена внутри функции) 


function f1(a, b, c) {
}

function sum() {
	const x = 2;
	const y = 3;
	console.log( x + y );
}
sum();

let a = 22;
let b = 33;
function sum2() {
	console.log( a + b );
}
sum2();

sum3(1000, 2000);// в любом месте кода
function sum3(x, y = 10) { //параметры по умолчанию
	console.log( x + y );
}
sum3(100, 200);
let z = 1;
sum3(z, 1);
sum3(1, 2, 3, 4);

//                                     return





//                                       Выбор имени функции

//"get…" – возвращают значение,
//"calc…" – что-то вычисляют,
//"create…" – что-то создают,
//"check…" – что-то проверяют и возвращают логическое значение, и т.д.

//showMessage(..)     // показывает сообщение
//getAge(..)          // возвращает возраст (получая его каким-то образом)
//calcSum(..)         // вычисляет сумму и возвращает результат
//createForm(..)      // создаёт форму (и обычно возвращает её)
//checkPermission(..) // проверяет доступ, возвращая true/false

// - Передаваемые значения копируются в параметры функции и становятся локальными переменными.
// - Функции имеют доступ к внешним переменным. Но это работает только изнутри наружу. Код вне функции не имеет доступа к её локальным переменным.
// - Функция может возвращать значение. Если этого не происходит, тогда результат равен undefined.
//Для того, чтобы сделать код более чистым и понятным, рекомендуется использовать локальные переменные и параметры функций, не пользоваться внешними переменными.

//Функция, которая получает параметры, работает с ними и затем возвращает результат, гораздо понятнее функции, вызываемой без параметров, но изменяющей внешние переменные, что чревато побочными эффектами.

// - Именование функций:

// - Имя функции должно понятно и чётко отражать, что она делает. Увидев её вызов в коде, вы должны тут же понимать, что она делает, и что возвращает.
// - Функция – это действие, поэтому её имя обычно является глаголом.
// - Есть много общепринятых префиксов, таких как: create…, show…, get…, check… и т.д. Пользуйтесь ими как подсказками, поясняющими, что делает функция.



//                                  Function Expression

function sayHi() {
	alert("Hello!");
}
let a = sayHi;//копируем значение функции, а не результат ее выполнения
console.log(a);
a();//теперь функция может вызываться через переменную a


//                                  Функции - "колбэки"

function ask(question, yes, no) {
	if(confirm(question)) yes() 
	else no();
}

ask('Вы согласны?', 
	function() {alert('Вы согласились') },
	function() {alert('Вы отказались') };
)


let age = 16; // возьмём для примера 16
if (age < 18) {
  welcome();               // \   (выполнится)
                           //  |
  function welcome() {     //  |
    alert("Привет!");      //  |  Function Declaration доступно
  }                        //  |  во всём блоке кода, в котором объявлено
                           //  |
  welcome();               // /   (выполнится)

} else {

  function welcome() {
    alert("Здравствуйте!");
  }
}
// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.
welcome(); // Ошибка: welcome is not defined

*/
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

//                                     Стрелочные функции =>
let ask = (yes,no) => {
	if(confirm('Вы согласны?')) {
		yes();
	} else {
		no();
	}
}

ask(
	function() { alert('Вы согласны')},
	function() { alert('Вы отказались')}
)
*/

/* eslint prefer-const: 0 */


console.log(1.e-3);