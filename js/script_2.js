// Строгий режим
"use strict"

// Приорітетність операторів
// let result = 2 + 3 * 10 / + "5";
// 1.
// let result = 2 + 3 * 10 / 5;
// 2.
// let result = 2 + 30 / 5;
// 3.
// let result = 2 + 6;
// 4.
// let result = 8;
// console.log(result);
/*
let num = 5;
let results = 2 + 3 * 10 / ++num;
// 1.
// let results = 2 + 3 * 10 / 6;
// 2.
// let results = 2 + 30 / 6;
// 3.
// let results = 2 + 5;
// 4.
// let results = 7;
console.log(results);
*/

// Оператори порівняння
// < > <= >=
// == !=
// === !==
/*
let result = 5 >= 6
console.log(typeof result)
console.log(result)
*/

/*
let result = 5 == "5"
console.log(result)
*/
/*
let result = 5 != "5"
console.log(result)
*/

// Порівнює як воно є без зміни типу даних
/*
let result = 5 === "5"
console.log(result)
*/
/*
let result = 5 !== "5"
console.log(result)
*/

/*
let a = 5
let b = "5"
let result = a === b;
console.log(result);
*/

// Оператор присвоєння =
// let someNum = 5;

// Логічні оператори
// ! || &&

// Оператор "ні" ! (унарний)
/*
let result = !"";
// 1. перевод типу даних в булінан
// 2. отримання результату true або false
// 3. зміна булєвого значення на протележне
console.log(typeof result);
console.log(result);
*/

// Оператор "або" ||
// 1. перевод типу даних в булінан
// 2. отримання результату
//    true або false операнда №1
// 3. якщо результат кроку 2 true, завершуємо дію
// 3.1 результатом операції буде значення операдна №1
// 	та булеве значення true
// 4. якщо результат кроку 2 false
//    отримання результату
//    true або false операнда №2
// 4.1 якщо результат кроку 4 true
// 	результатом операції буде значення операдна №2
// 	та булеве значення true
// 5. якщо результат кроку 3 false
// 	результатом операції буде значення операдна №2
// 	та булеве значення false
/*
let result = 0 || "";
console.log(result);
console.log(Boolean(result));
*/

// Оператор "та" &&
// let result = 1 && 5;
// 1. перевод типу даних в булінан
// 2. отримання результату
//    true або false операнда №1
// 3. якщо результат кроку 2 false, завершуємо дію
// 3.1 результатом операції буде значення операдна №1
// 	та булеве значення false
// 4. якщо результат кроку 2 true
//    отримання результату
//    true або false операнда №2
// 4.1 якщо результат кроку 4 false
// 	результатом операції буде значення операдна №2
// 	та булеве значення false
// 5. якщо результат кроку 2 та 4 true
//    результатом операції буде значення операдна №2
// 	та булеве значення true
/*
console.log(result);
console.log(Boolean(result));
*/
// Умовне вітвлення
// Синтаксис
/*
if (умова #1) {
	// Код, який виконоється
	// тільки якщо умова #1 вертає true
} else if (умова #2) {
	// Код, який виконоється
	// тільки якщо умова #2 вертає true,
	// а умова №1 false
}else {
	// Код, який виконоється
	// тільки якщо умова #2 вертає false,
	// та умова №1 false
}
// продовження коду ...
*/
/*
let varOne = 5;
let varTwo = 30;
// console.log(Boolean(varOne));
/*
// Конструкція if переводить тип даних в boolean
//if (varOne) { // Чи varOne true?
	// Виконуємо якщо так
	//console.log("Працює!");
//}

if (varOne > varTwo) { // Чи true (правда) що varOne більше за varTwo? 
	console.log(`${varOne} більше ніж ${varTwo}`);
} else if (varOne === 10) {// Чи true (правда) що varOne дорівнює 10? 
	console.log(`varOne дорівнює 10`);
	// Може бути безліч "else if"
} else if (varTwo === 20) {// Чи true (правда) що varTwo дорівнює 20?
	console.log(`varTwo дорівнює 20`);
} else {// Виконуємо якщо усі попередні умови повернули false
	console.log(`Все пропало...`);
}
// Виконуємо у будь-якому випадку
console.log('Продовження коду...');
*/

let varOne = "1";
let varTwo = 3;
let varThree = 3;
let varFour = 4;

if (varTwo === 2 || varOne > 3 && varThree < 4 || varFour > 6) {
	// Код виконоється
	// тільки якщо умова вертає true
	console.log('Умова true');
}

// Крок №1 (Пріорітет у операторів порівняння)
//if (false || false && true || false) {}

// Крок №2 (Пріорітет у оператора &&)
//if (false || false || false) {}

// Крок №3 (Пріорітет у оператора &&)
// if (false) {}


// Оператор умови ?
// Синтаксис
// умова ? значення якщо умова true : значення якщо умова false
// let someVar = 10 > 5 ? "10 більше 5" : "10 меньше 5";
// console.log(someVar);

/*
let someVar;
if (10 > 5) {
	someVar = "10 більше 5";
} else {
	someVar = "10 меньше 5";
}
*/

/*
let someVar = "123";
let someNewVar = someVar ? "Так, все ок" : null;
console.log(someNewVar);
*/


// Цикл For
// Синтаксис
/*
for(початок; умова закінчення циклу; крок){
	// код виконується
	// на кожному колі циклу
}
*/

/*
let someString = "Привіт! Як справи?";
console.log(someString.length);
*/
/*
console.log(someString[0]);
console.log(someString[1]);
console.log(someString[2]);
console.log(someString[3]);
console.log(someString[4]);
console.log(someString[5]);
console.log(someString[6]);
*/
/*
for (let i = 0; i < someString.length; ++i) {
	console.log(someString[i]);
}
*/

// Масиви
/*
let someArray = [];
console.log(typeof someArray);
*/
// Чи це масив. Array.isArray(тут пишемо змінну)
// console.log(Array.isArray(someArray));
/*
if (Array.isArray(someArray)) {
	// ...
}
*/

let someArray = [10, "Жека", true, "Привіт!"];
/*
console.log(someArray);
console.log(someArray[1]);
console.log(someArray.length);
*/
/*
for (let i = 0; i < someArray.length; ++i) {
	console.log(i);
	console.log(someArray[i]);
	// ...
}
*/
// Метод перебору масиву
// масив.forEach(змінна яка отримає значення елементу масива => {});
/*
someArray.forEach((value, index) => {
	// Номер ячейки
	//console.log(index);
	// Значення ячейки
	//console.log(value);
	if (typeof value === "string") {
		for (let i = 0; i < value.length; ++i) {
			console.log(value[i]);
		}
	}
});
*/

// Додати елемент в масив
// push додає елемент кінець масиву
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(usersNames);
usersNames.push("Жека");
console.log(usersNames);
*/

// includes Чи є елемент в масиві (пошук елемента)
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(usersNames);
console.log(usersNames.includes("Петро"));
*/
// якщо в масиві usersNames НЕМАЄ значення 10,
// то додати
/*
if (!usersNames.includes(10)) {
	usersNames.push(10);
}
*/
// або..
// !usersNames.includes(10) ? usersNames.push(10) : null;
// console.log(usersNames);

// З масива у рядок
let usersNames = ["Вася", "Петро", "Ілдика"];
/*
let users = "";
usersNames.forEach((item, index) => {
	users += item;
	index !== usersNames.length - 1 ? users += ',' : null;
});
console.log(users);
*/
/*
let usersNamesStr = usersNames.join();
console.log(usersNamesStr);
*/

// Функції
/*
Використовується для запуску
коду який повторюється,
та для використання методу функціонального
програмування (кожну дію варто помістити в окрему функцію)
*/

// Об'ява функції
// Синтаксис
/*
function ім'я(параметри){
	// тіло функції (код функції)
}
*/

/*
Назви функцій формуються за
тими ж правилами що й назви змінних

Наприклад, функції, починаючі с
"show..." зазвичай що-то показують,
"get..." – повертають значення,
"calc..." – що-то вичисляють,
"create..." – що-то створюють,
"check..." – що-то перевіряють і повертають логічно
значення, і т.д.
*/
// Приклади імен
/*
showMessage
getOptions
calcSum
*/


/*
showMessage()

function showMessage() {
	console.log('я текст!');
}
*/
// Виклик (запуск) функції
/*
showMessage()
// ....
showMessage()
showMessage()
showMessage()
// ...
showMessage()
showMessage()
*/

// Параметри функції
/*
function showMessage(someText = "Текст за замовченням") {
	console.log(someText);
}
showMessage()
showMessage("Все ок, тримаємось!")
*/
/*
const numOne = 10;
const numTwo = 20;

// Функція суми двох чисел
function calcSum(a = 0, b = 0) {
	const result = a + b;
	showMessage(result);
}
function showMessage(someText = "Текст за замовченням") {
	console.log(someText);
}
calcSum(10, 30)
calcSum(50, 300)
calcSum(50, -300)
calcSum(50)
*/

// Поовернення результату
// return - повертає результат функції

// Функція суми двох чисел
function calcSum(a = 0, b = 0) {
	return a + b
}
function showMessage(someText = "Текст за замовченням") {
	console.log(someText);
}
// showMessage(calcSum(10, 20))
/*
let result = calcSum(10, 20);
showMessage(result);
*/

// Область видимості
// Привласнення функції змінній
/*
let someVar;
let someFuncVar;

function someFunc() {
	someVar = 10;
	// Функціональний вираз
	someFuncVar = function (message) {
		console.log(message);
	}
}
someFunc()
someFuncVar("Привіт!")
console.log(someVar);
*/

// Стрілочні функції

// Звичайна функція
/*
function some(text) {
	console.log(text);
}
*/
// Стрілочна функція в один рядок
/*
let some = (text) => console.log(text);
*/

// Функція де більше рядків
/*
let some = (text) => {
	console.log(text);
	// ....
	// ....
	// ....
}
*/

// Інше
// Сукупність операторів додавання та присвоєння
/*
let someText = "";
console.log(someText);
someText = someText + "<div></div>";
console.log(someText);
someText = someText + `<a href="contacts.html"></a>`;
console.log(someText);
*/
/*
let someText = "";
someText += `<div>`
someText += `<a href="contacts.html"></a>`
someText += `</div>`
console.log(someText);
*/


// Завдання
// Текст з ефектом друку
const text = "Привіт!"
let template = ``;

function createText(someText) {
	for (let i = 0; i < someText.length; ++i) {
		const item = someText[i]
		template += `<span style="animation-delay: 0.${i}s">${item}</span>`
	}
}
createText(text);

const page = document.querySelector('.page');
page.insertAdjacentHTML("beforeend", template);
