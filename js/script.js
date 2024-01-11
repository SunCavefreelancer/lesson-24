// Строгий режим
"use strict"



/* ЦИКЛ for */

let someString = "СМАКОЛИКИ ЗА СМАЧНОЮ ЦІНОЮ";
console.log(someString.length);
/* someString.length; -весь рядок в консоль*/
/*
console.log(someString[0]);
console.log(someString[1]);
console.log(someString[2]);
console.log(someString[3]);
console.log(someString[4]);
console.log(someString[5]);
console.log(someString[6]);
console.log(someString[7]);
console.log(someString[8]);
console.log(someString[9]); 
console.log(someString[10]);
console.log(someString[11]);
console.log(someString[12]);
console.log(someString[13]);
console.log(someString[14]);
console.log(someString[15]);
console.log(someString[16]);
console.log(someString[17]);
console.log(someString[18]); 
console.log(someString[19]);
console.log(someString[20]);
console.log(someString[21]);
console.log(someString[22]);
console.log(someString[23]);
console.log(someString[24]);
console.log(someString[25]);
console.log(someString[26]);
	 або СКОРОЧЕНИЙ запис - ЯКЩО хочемо фіксоване значення (виводимо н/п до 10-и символів) */
for (let i = 0; i < 10; ++i) {
	console.log(someString[i]);
}
/* 	ЯКЩО весь рядок в консоль, будь-яку кількість символів, то пишемо*/
for (let i = 0; i < someString.length; ++i) {
	console.log(someString[i]);
}
//------------------------------------



//------------------------------------
/* Текст с ефектом (в HTML ми слово Привіт не пишемо)*/
const text = "Смачнісімо!"
let template = ``;

function createText(someText) {
	for (let i = 0; i < someText.length; ++i) {	/* тут виводимо в консоль одразу весь рядок */
		const item = someText[i]
		template += `<span style="animation-delay: 0.${i}s">${item}</span>`
	}
}
createText(text);

const page = document.querySelector(`.page`);
page.insertAdjacentHTML("beforeend", template);


//------------------------------------
//МАСИВИ
let someArray = []; //Об'явили масив, без знчення
console.log(typeof someArray);

//Перевіряємо зміну someArray чи це масив?
console.log(Array.isArray(someArray));
//відповідь: ТАК, масив, бо такі дужки [], навідь якщо він пустий

//робимо перевірку ПРАВДА чи БРЕХНЯ
if (Array.isArray(someArray));
// в консоль буде true бо це масив;

//Н/п:
//Oб`явимо і заповнимо масив даними (число, "рядок", значення true)
let someDescriotion = []; //Об'явили масив, без знчення
someDescriotion = [10, "Пташка", true];
console.log(someDescriotion);
console.log(someDescriotion.length);

//якщо треба вивести в консоль конкретне значеня, конкретної ячейки пишемо
//Н/п:
//Oб`явимо і заповнимо масив даними (число, "рядок", значення true)
let someСell = []; //Об'явили масив, без знчення
someСell = [10, "Пташка", true];	//задали знчення
console.log(someСell[1]);			//вказали № ячейки
console.log(someСell.length);		//покаже кількість усих ячеєк = їх 3!


//Робимо Перебор Масиву
//беремо змінну someScript
let someScript = [2, "Яблуко", false];	//задали знчення
someScript.forEach((value, index) => {
	console.log(index);	//номер яччейки
	console.log(value);	//тут покаже яке значеня у цій ячейці
});


//Додати Елемент в Масив за допомогою "push"
let userNames = ["Вася", "Петро", "Маруся"];
console.log(userNames);
userNames.push("Жека");	//Додаємо рядок "Жека" за допомогою "push"
console.log(userNames);


//Шукаємо Елемент в Масиві за допомогою "includes"
let userSonames = ["Smith", "Jackson", "Jordan "];
console.log(userSonames);
console.log(userSonames.includes("Jackson"));	//тут він Є, в консоль буде -true-
console.log(userSonames.includes("Jac"));		//якщо не знайшли, то буде -false-


//Якщо в Масиві НЕМАЄ значення 10
//то додати в Масив за допомогою оператора "!"
if (!userSonames.includes(10)) {		//тут шакаємо "includes"
	userSonames.push(10);				//тут додаємо "push"
}
//або робимо ТАКИЙ ЗАПИС(теж саме)тільки оператор "?""
userSonames.includes(10) ? userSonames.push(10) : null;

console.log(userSonames);


//Виводимо з Масива у "Рядок" за допомогою join("...")
let userSonamesString = userSonames.join(",");	//створюємо НОВУ ЗМІНУ
console.log(userSonamesString);



//------------------------------------
//ФУНКЦІЇ
//function ім`я(параметри){
/*тут пишемо код функції */
//}


//Обявляємо ФУНКЦІЮ
//Н/п:
function showMassage() {	//ім`я - глагол, що вона робить?
	console.log("якийсь текст");
}
showMassage()//Викликаємо ФУНКЦІЮ (запускаємо) її, виводимо в консоль
showMassage()//Викликаємо ФУНКЦІЮ (запускаємо) її, виводимо в консоль
showMassage()//Викликаємо ФУНКЦІЮ (запускаємо) її, виводимо в консоль
//...і так далі


//Параметри ФУНКЦІї
function showMassage(someText) {
	console.log(someText);
}
showMassage()
showMassage("текст можна змінювати");
//Н/п:
const numOne = 10;		//це -а-
const numTwo = 20;		//це -b-
//Суми 2х чисел
function calcSum(a = 0, b = 0,) {	//тут а = 10, b = 20
	const result = a + b;			//тут складаємо 10 + 20
	showMassage(result);			//результат буде в "function showMassage(someText)"
}
function showMassage(someText) {
	console.log(someText);			//тут виведеться в консоль 40
}

calcSum(10, 30)						//тут складаємо 10+30

calcSum(50, 20)						//тут складаємо 50+20

calcSum(100)						//тут просто 100









//--------------------------ДОМАШКА-------lesson-24------------------
//№1
//Що потрапить в консоль?
let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}
//Відповідь: в console потрапить 1 - true, бо someVar = 0, а це false.
//(Спочатку Змінна коли створена, їй привласнене значення "0", тобто false, далі йде інкремент Змінна "++someVar", що збільшить значення на 1, тобто "if" - Змінна, а 1 true в булевому значені!)



//№2
//За допомогою циклу FOR виведіть в консоль 10 рядків:Пункт №1,Пункт №2,і т.д.
//Відповідь:
let someLine = "Пункт1, Пункт2, Пункт3, Пункт4, Пункт5, Пункт6, Пункт7, Пункт8, Пункт9, Пункт10";

/* 	ЯКЩО весь рядок в консоль, будь-яку кількість символів, то пишемо*/
for (let i = 1; i < 10; ++i) {
	console.log(`Пункт${i}`);
}



//№3
//Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

//ВІдповідь: 
//Спочатку перевіряється умова 2*20 <= 10, що є хибним (40 не менше або дорівнює 10);
//Потім перевіряється умова 30/2 < 5, яка також є хибною (15 не менше 5);
//Наступна умова 10 <= "10" є істинною (10 менше або дорівнює 10);
//через пріоритет операцій && (AND) має пріоритет над || (OR), ми повинні спочатку обчислити вираз 30/2 < 5 && 10 <= "10". 
//Оскільки обидві умови повинні виконуватися, щоб результат був істинним, і хоча 10<= "10" істинно, але 30/2 < 5 хибно, весь результат 30/2 < 5 && 10 <= "10" також стає хибним.
//Тепер перевіряється умова 20 === "20", яка є невірною, тому що "===" перевіряє на строгу рівність, що означає рівність і тип даний, а 20 (число) не дорівнює "20" (рядок).
//Таким чином, усі частини цієї умови помилкові, і в консоль нічого не виводить.



//№4
//Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
//Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
//Функція не має повертати NaN, Infinite або помилку 

//ВІдповідь: 
function aerial(a, b) {
// Перевіряємо, чи передані обидва аргументи і чи є вони числами.
	if (typeof a === 'undefined' || typeof b === 'undefined' || 
		typeof a !== 'number' || typeof b !== 'number') {
		return 'Помилка: аргументи недійсні.';
}
// Перевіряємо, чи дійсно другий аргумент не є нулем.
	if (b === 0) {
		return 'Помилка: ділення на нуль.';
	}
// Повертаємо результат ділення з впереду йдучим рядком.
	return "Результат ділення: " + (a / b).toString();
}

console.log(aerial(10, 2));  // Результат ділення: 5
console.log(aerial(10, 0));  // Помилка: ділення на нуль.
console.log(aerial(10));     // Помилка: аргументи недійсні.
console.log(aerial());       // Помилка: аргументи недійсні.





//№5
//Створіть масив даних - 5 елементів, один з яких число 10
//Обробіть масив за допомогою методу перебору
//Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
//Відповідь:
//Oб`явимо і заповнимо масив даними (число, "рядок", значення)
let someMassa = []; //Об'явили масив, без знчення
	someMassa = ["Квітка", 10, "Пташхи", true, "Сонеко"];	//заповнили значення
	console.log(someMassa);
	console.log(someMassa.length);

//Робимо Перебор Масиву
someMassa.forEach((value, index) => {
	console.log(index);	//номер яччейки
	console.log(value);	//тут покаже яке значеня у цій ячейці
	}
)

//Шукаємо Елемент в Масиві за допомогою "includes"
console.log(someMassa);
console.log(someMassa.includes(10));	//тут він Є, в консоль буде -true-

