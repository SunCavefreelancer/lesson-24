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
	 або СКОРОЧЕНИЙ запис нижче ЯКЩО хочемо фіксоване значення (виводимо н/п до 10-и символів) */
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









//--------------------------ДОМАШКА--------------------------
//№1
let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}
//Відповідь: в console потрапить 1 - false, бо someVar = 0.



//№2
let someLine = "Пункт 1";
someLine = "Пункт 2";
someLine = "Пункт 3";
someLine = "Пункт 4";
someLine = "Пункт 5";
someLine = "Пункт 6";
someLine = "Пункт 7";
someLine = "Пункт 8";
someLine = "Пункт 9";
someLine = "Пункт 10";
someLine = "Пункт 11";
someLine = "Пункт 12";
console.log(someString.length);

// СКОРОЧЕНИЙ запис - ЯКЩО хочемо фіксоване значення (виводимо 10 рядків) */
for (let i = 0; i < 11; ++i) {
	console.log(someLine[i]);
}


//№3
//зовсім не розумію


//№4
//зовсім не розумію

//№5
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

