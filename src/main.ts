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

const age5 = 40;         // TypeScript виводить тип як number
console.log(age5);
const weight5 = 40;   // TypeScript виводить тип як number
console.log(weight5);
const username5 = "Jacob"; // TypeScript виводить тип як string
console.log(username5);
const isOnline5 = false;  // TypeScript виводить тип як boolean
console.log(isOnline5);
const user5 = null;       // TypeScript виводить тип як null
console.log(user5);
const config5 = undefined; // TypeScript виводить тип як undefined
console.log(config5);

console.log("Якщо змінній при оголошенні присвоєно значення, TypeScript автоматично визначає її тип. Тому в багатьох випадках вказувати тип вручну немає необхідності. Це називається виведенням типів (type inference) і працює не тільки для примітивних значень, а й для масивів, об'єктів та функцій.");
console.log("Якщо після оголошення змінної спробувати присвоїти значення іншого типу, TypeScript видасть помилку:");

console.log("======================================");

console.log("====Типізація об'єктів====");
//Типізація об'єктів
//Об'єкти у TypeScript працюють так само як і в JavaScript. Різниця в тому, що в TypeScript ми можемо описувати структуру об'єкта за допомогою типізації.

const user6: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
console.log(user6);

//У цьому прикладі user – це об'єкт, у якому властивість name має тип string, а age – number.

//TypeScript не дозволить записати в ці поля значення іншого типу або пропустити обов'язкове поле при оголошенні.

//user.age = "30"; 
// ❌ Error: Type 'string' is not assignable to type 'number'

//Якщо при оголошенні об'єкта пропустити обов'язкове поле, TypeScript також видасть помилку через те, що відсутня властивість.

//nst user7: { name: string; age: number } = 
// {name: "Alice"
// };

// ❌ Error: Property 'age' is missing in type '{ name: string; }' 
// but required in type '{ name: string; age: number; }'.

// A якщо для властивості вказати значення неправильного типу при оголошенні отримаємо наступну помилку.

// const user: { name: string; age: number } = {
//   name: "Alice",
//   age: "25" // ❌ Error: Type 'string' is not assignable to type 'number'
// };

//Якщо спробувати звернутися до неіснуючого поля, TypeScript також видасть помилку:

//console.log(user6.email); 

// ❌ Error: Property 'email' does not exist on type '{ name: string; age: number; }'


// TypeScript може виводити тип об'єкта на основі переданих значень, але це не найкраща практика. 
// Виведення типів для об'єктів може призвести до труднощів при їх розширенні та зміні. 
// Рекомендується явно вказувати тип об'єкта, щоб уникнути можливих помилок і зробити код зрозумілішим.
console.log("======================================");


console.log("====Використання інтерфейсів====");
//Використання інтерфейсів
//Якщо є декілька об’єктів з однаковим типом, незручно дублювати їх опис перед кожним оголошенням.

const poly1: { name: string; age: number } = {
  name: "Poly",
  age: 25
};
console.log(poly1);


const jacob1: { name: string; age: number } = {
  name: "Jacob",
  age: 36
};
console.log(jacob1);

//Для цього можна використовувати інтерфейси (interface):
// Оголошуємо інтерфейс користувача
interface User0 {
  name: string;
  age: number;
}

// Використовуємо інтерфейс для типізації
const poly2: User0 = {
  name: "Poly",
  age: 41
};

const jacob2: User0 = {
  name: "Jacob",
  age: 41
};

console.log(poly2, jacob2);

//Тут User - це власний тип, створений для представлення об'єкта користувача. Його можна використовувати для будь-яких змінних такого формату. Інтерфейси дозволяють покращити структуру та повторне використання коду.

console.log("======================================");

console.log("====Опціональні (?) та readonly поля====");

//Опціональні (?) та readonly поля

// TypeScript дозволяє позначати деякі поля як опціональні, тобто такі, які можуть бути відсутні в об'єкті. Для цього після імені властивості додається ? при описі типу.

interface User1 {
  name: string;
  age?: number; // Це поле може бути відсутнім
  email?: string; // Це поле може бути відсутнім
}

const poly: User1 = {
  name: "Poly",
  email: "polyshmoly@com.ua"
}; 
console.log(poly.age); // ✅ Не буде помилки, оскільки age і email можeуть бути відсутніми

const jacob: User1 = {
  name: "Jacob",
  age: 36
};

console.log(jacob.age);
console.log(poly.email);

//Також можна позначити поле як readonly, щоб його не можна було змінювати після ініціалізації.



interface User2 {
  readonly id: number; // Це поле тільки для читання
  name: string;
}

const user2: User2 = {
  id: 123,
  name: "Alice"
};

//user2.id = 456; // ❌ Помилка: Cannot assign to 'id' because it is a read-only property.
console.log("======================================");

console.log("====Типізація масивів: тип[] / Array<тип> =====");

// Типізація масивів

// Масиви в TypeScript – це списки значень, так само як і в JavaScript. Завдяки статичній типізації вони допомагають уникати помилок при роботі з даними.



// Існує два основних способи оголошення масивів:

// використання тип[]
// використання Array<тип>


// Ось як це виглядає в коді:

const numbers1: number[] = [1, 2, 3, 4, 5];
const names1: string[] = ["Alice", "Bob", "Charlie"];

console.log(numbers1, names1);

// Альтернативний синтаксис:

const numbers2: Array<number> = [1, 2, 3, 4, 5];
const names2: Array<string> = ["Alice", "Bob", "Charlie"];

console.log(numbers2, names2);

//Обидва варіанти є еквівалентними, проте у стандартних сценаріях рекомендується використовувати тип[], оскільки він коротший і зрозуміліший. Синтаксис Array<T> частіше застосовується у випадках, коли працюємо з узагальненнями (generics), про які ми поговоримо пізніше.

//TypeScript також автоматично виводить типи для масивів, тому в простих випадках тип можна не задавати:

// TypeScript виведе тип як number[]
//const numbers = [1, 2, 3]; 

// TypeScript виведе тип як string[]
//const names = ["Alice", "Bob"]; 

console.log("===Помилки типізації масивів===");

// TypeScript дозволяє створювати масиви лише з визначеним типом даних. Якщо спробувати додати в масив значення іншого типу, буде помилка:

const numbers3: number[] = [1, 2, 3];

numbers3.push(4); // ✅ Можна додати число

console.log(numbers3);

//numbers3.push("5"); 
// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(numbers3);

// Також TypeScript не дозволяє звертатись до неіснуючих елементів без додаткових перевірок:



const names3: string[] = ["Alice", "Bob"];

//console.log(names3[5].toUpperCase()); 
// ❌ Error: Object is possibly 'undefined'. // тут всього два елементи з індексом 0 і 1.


console.log("===Типізація масиву об'єктів===");
//Типізація масиву об'єктів

//TypeScript дозволяє типізувати масиви, що містять об'єкти. Створюємо інтерфейс User для типізації об’єктів, який потім використовуємо для типізації масиву.

interface User4 {
  name4: string;
  age5: number;
}

const users4: User4[] = [
  { name4: "Alice", age5: 25 },
  { name4: "Jacob", age5: 30 }
];

console.log(users4);
//Також можна використовувати Array<T>:

const users5: Array<User4> = [
  { name4: "Mango", age5: 35 },
  { name4: "Jorfdan", age5: 40 }
];


//Якщо спробувати додати в такий масив елемент, який не відповідає заданій структурі, TypeScript видасть помилку:

//users5.push({ name4: "Charlie", ... }); - без /*age5: 13*/
// ❌ Error: Property 'age' is missing in type '{ name: string; }'.

console.log(users5);
console.log("======================================");

console.log("===Підказки методів та властивостей===");

// Підказки методів та властивостей

// TypeScript допомагає розробникам, надаючи список доступних методів та властивостей відповідно до типу змінної. Це працює не тільки для масивів, а й для інших типів, таких як об'єкти, строки та функції. У випадку масивів це дозволяє точно знати, які операції можна виконати та які властивості доступні.



const numbers: number[] = [1, 2, 3, 4, 5];

// ✅ TypeScript підказує, що у масивів є властивість length
console.log(numbers.length);

// ✅ TypeScript підказує, що у масивів є метод includes
console.log(numbers.includes(6));

// TypeScript знає, що num є числом і дозволяє математичні операції
const doubleNumbers = numbers.map(num => num * 2);

console.log(doubleNumbers);

//Якщо ми спробуємо викликати метод, який не існує у масивів, TypeScript також видасть помилку:

//const numbers: number[] = [1, 2, 3, 4, 5];

//numbers.nonExistentMethod(); 
// ❌ Error: Property 'nonExistentMethod' does not exist on type 'number[]'.















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

