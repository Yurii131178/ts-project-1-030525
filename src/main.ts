import './style.css'


// У цьому модулі ти навчишся:
/*
 * Розуміти що таке TypeScript і чим він корисний;
 * Як встановити та налаштувати середовище для роботи з TS;
 * Як працювати з основними типами даних;
 * Як типізувати функції та проміси.
 */

// Створення проєкту

// Для роботи з TypeScript нам потрібно зробити кілька кроків для встановлення та налаштування середовища розробки. У вас вже встановлені Node.js і Visual Studio Code.

// Для роботи з TypeScript у VS Code необхідно додати наступні розширення:

// * ESLint
// * Prettier - Code formatter
// * Path Intellisense

// Наступний крок – це створення проєкту з TypeScript. Будемо користуватись вже знайомим інструментом для збірки проєктів – Vite.

// "npm create vite@latest"
// "Project name:" - назва проєкту
// "Vanilla" - обираємо
// "TypeScript" - обираємо


// переходимо в папку та інсталюємо всі залежності

// "cd 'назва проєкту'"
// "npm i"
// "npm run dev"

//=============================================================//
// Після створення проєкту в кореневій папці з'явиться файл tsconfig.json. Це конфігураційний файл TypeScript, який визначає, як буде працювати компілятор. Ці налаштування є оптимальними для більшості проєктів і забезпечують хорошу підтримку сучасного коду.


//TypeScript – 
// це мова програмування від Microsoft, яка розширює JavaScript, додаючи статичну типізацію. 
// Це суперсет JavaScript, тобто будь-який коректний код JS є коректним у TS. 
// Головна перевага TypeScript – можливість знаходити помилки ще до запуску коду, що робить розробку надійнішою.

// Переваги TypeScript
/**
 * раннє виявлення помилок – код перевіряється ще до виконання;
 * краща підтримка коду – структура програми зрозуміліша;
 * автодопомога (IntelliSense) – редактори коду (VS Code) пропонують підказки.
 */

//*******************************************************************************// 

// Перевірка типів

// TypeScript дозволяє вказувати тип змінної після її імені через двокрапку
//  :
// Це гарантує, що змінна міститиме лише значення відповідного типу.

// let змінна: тип = значення;

//Змінні можна оголошувати за допомогою 
// let 
// або 
// const
// тут все як у JavaScript.

// Приклад типізації змінної age яка буде зберігати число (тип number):

let myAge: number = 47;
console.log(myAge);
console.log("==калькудятор TS==");

// calculator.ts

function add3(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Ділення на нуль неможливе");
  }
  return a / b;
}

// Тестові виклики:
console.log("Додавання:", add3(10, 5));
console.log("Віднімання:", subtract(10, 5));
console.log("Множення:", multiply(10, 5));
console.log("Ділення:", divide(10, 5));

//Якщо спробувати записати значення іншого типу в момент оголошення або при зміні значення, TypeScript видасть помилку:

// let age: number = "Jacob"; - // ❌ Error: Type 'string' is not assignable to type 'number'

// age = true; - // ❌ Error: Type 'boolean' is not assignable to type 'number'

//TypeScript допомагає уникати таких ситуацій, перевіряючи типи ще до виконання коду.

// --------------Транспіляція в JavaScript------------------------------------//

//TypeScript працює лише під час розробки, допомагаючи перевіряти типи та запобігати помилкам.

// example.ts
const message1: string = "Hello, TypeScript (:string)!";
console.log(message1);

//У фінальному коді для браузера чи сервера всі типи зникають, тому що TypeScript перетворюється у JavaScript, цей процес називається транспіляцією.

// example.js
const message = "Hello, TypeScript(final JS)!";
console.log(message);

// ! Типи існують лише під час розробки та зникають після компіляції. Ви пишете код на TypeScript, але в браузер передається вже звичайний JavaScript. У Vite цей процес відбувається автоматично, що дозволяє працювати з TypeScript без додаткових налаштувань.


console.log("===Прості типи===");

//Прості типи
//У TypeScript, як і в JavaScript, є набір простих типів, які називають скалярними. Вони зберігають лише одне значення і є основою для роботи з даними.

//Логічний тип (boolean) використовується для зберігання значень true або false, що часто застосовується в умовних операціях.

const isOnline: boolean = false;
console.log(isOnline);

//Числовий тип (number) використовується для типізації будь-яких чисел.

const age4 = 26;     
const weight4: number = 3.14;

console.log(age4);
console.log(weight4);
//Текстовий тип (string) використовується для рядків.

const username: string = "Jacob";
console.log(username);


//Існують два спеціальні типи – null і undefined, які використовуються для позначення відсутності значення.

// Даних про користувача ще немає
let user: null = null;
console.log(user);


// Налаштування ще не ініціалізовані
let config: undefined;
console.log(config);

//Типи null та undefined використовуються в багатьох сценаріях. Пізніше ми розглянемо їх у контексті роботи з функціями та об'єктами, а поки що потрібно просто знати, що вони існують.
//--------------------------------------//
//✍️ Приклади використання:
console.log("****✍️ Приклади використання*****");

let age: number = 13;
console.log(age);
let name: string = "Іван-13";
console.log(name);
let isAdmin: boolean = true;
console.log(isAdmin);
let empty: null = null;
console.log(empty);
let notAssigned: undefined = undefined;
console.log(notAssigned);
let id: symbol = Symbol("id");
console.log(id);
let bigNumber: bigint = 9007199254740991n;
console.log(bigNumber);

console.log("**********************************");
//Ці типи — база для розуміння складніших конструкцій у TypeScript: масивів, об'єктів, типів-об'єднань, інтерфейсів тощо.


//Виведення типів
console.log("====Виведення типів=====");

//Якщо змінній при оголошенні присвоєно значення, TypeScript автоматично визначає її тип. Тому в багатьох випадках вказувати тип вручну немає необхідності. Це називається виведенням типів (type inference) і працює не тільки для примітивних значень, а й для масивів, об'єктів та функцій.

const age5 = 26;         // TypeScript виводить тип як number
const weight5 = 3.14;   // TypeScript виводить тип як number
const username5 = "Jacob"; // TypeScript виводить тип як string
const isOnline5 = false;  // TypeScript виводить тип як boolean
const user5 = null;       // TypeScript виводить тип як null
const config5 = undefined; // TypeScript виводить тип як undefined

console.log("Якщо змінній при оголошенні присвоєно значення, TypeScript автоматично визначає її тип. Тому в багатьох випадках вказувати тип вручну немає необхідності. Це називається виведенням типів (type inference) і працює не тільки для примітивних значень, а й для масивів, об'єктів та функцій.");
console.log("Якщо після оголошення змінної спробувати присвоїти значення іншого типу, TypeScript видасть помилку:");

console.log("======================================");




















const numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers.length);
console.log(numbers.includes(6));

const doubleNumbers = numbers.map(num => num * 2);

console.log(doubleNumbers);



// Якщо функція повертає значення, його тип теж можна вказати (:number):


function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(5, 10); // ✅ result матиме тип number

console.log(result);

///////////////////////

interface User {
  id: number;
  name: string;
}


// ***********************************************//

//Розглянемо задачу, де необхідно написати функцію, що отримує список користувачів та повертає імена цих користувачів у вигляді масиву рядків. Ось як ми можемо типізувати таку функцію:

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const userList: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const names = getUserNames(userList);
console.log(names); // ['Alice', 'Bob', 'Charlie']

//У цьому прикладі функція getUserNames приймає масив об'єктів типу User та повертає масив рядків.

// ***********************************************//

// Опціональні параметри 
// TypeScript дозволяє робити параметри функції опціональними за допомогою додавання ?.

function greet(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  } else {
    console.log(`Hello, my name is ${name}.`);
  }
}

greet("Alice", 30); // ✅
greet("Bob"); // ✅

//greet("Jacob", true); // ❌

//*****************************************//

// Function Type (Тип функції)

// У TypeScript можна визначати не тільки окремі параметри та типи значень, що повертаються, а й описувати форму всієї функції за допомогою Function Type.

// Function Type визначає, які аргументи приймає функція та яке значення повертає. Для цього використовують type.

type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (x, y) => x + y;

console.log(add(2, 3)); // 5

// AddFunction - це тип функції, що приймає два числа та повертає число.
// add - функція, яка реалізує цей тип.

