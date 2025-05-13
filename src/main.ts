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

// let myAge: number = "wow"; - ❌значення іншого типу викличе помилку 
console.log(myAge);



console.log("==калькулятор TS==");

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
console.log(poly.age); // ✅ Не буде помилки, оскільки age і email можуть бути відсутніми

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
numbers3.push(5, 6, 7);
console.log(numbers3);

// Також TypeScript не дозволяє звертатись до неіснуючих елементів без додаткових перевірок:


const names3: string[] = ["Alice", "Bob", "Mango"];
console.log(names3[0].toUpperCase());

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
numbers.push(6);
console.log(numbers.length);
console.log(numbers);



// ✅ TypeScript підказує, що у масивів є метод includes
console.log(numbers.includes(3));
console.log(numbers.includes(7));
// TypeScript знає, що num є числом і дозволяє математичні операції
const doubleNumbers = numbers.map(num => num * 2);

console.log(doubleNumbers);

//Якщо ми спробуємо викликати метод, який не існує у масивів, TypeScript також видасть помилку:

//const numbers: number[] = [1, 2, 3, 4, 5];

//numbers.nonExistentMethod(); 
// ❌ Error: Property 'nonExistentMethod' does not exist on type 'number[]'.

//======================================================//
//----chat gpt--- власні типи----------//
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// Що таке Union (|)?
// Union дозволяє змінній або параметру мати кілька можливих типів.

let value: string | number;

value = "hello"; // ✅ OK
value = 123;     // ✅ OK
// value = true;    // ❌ Error: boolean is not allowed

// 📦 Приклад з типами

type ApiStatus = "loading" | "success" | "error";

function showStatus(status: ApiStatus) {
  if (status === "loading") {
    console.log("Завантаження...");
  } else if (status === "success") {
    console.log("Успіх!");
  } else {
    console.log("Помилка!");
  }
}

showStatus("loading");
showStatus("success");
showStatus("error");


// ============Union з інтерфейсами================

interface Dog {
  type: "dog";
  bark(): void;
}

interface Cat {
  type: "cat";
  meow(): void;
}

type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}
//.................................................//

// 📦 Задача: Обробка типу доставки
// Уяви, що користувач може вибрати один із способів доставки:
// "courier" — кур'єрська доставка
// "pickup" — самовивіз
// "locker" — доставка у поштомат

// ✍️ Завдання:
// Створи тип DeliveryType з цими варіантами.
// Створи функцію getDeliveryMessage(delivery: DeliveryType), яка повертає рядок:
// "Ваше замовлення буде доставлено кур'єром" для "courier";
// "Ви можете забрати замовлення самостійно" для "pickup";
// "Замовлення буде доставлено у поштомат" для "locker".

type DeliveryType = "courier" | "pickup" | "locker";

function getDeliveryMessage(delivery: DeliveryType) {
  if (delivery === "courier") {
    return "Ваше замовлення буде доставлено кур'єром";
  } else if (delivery === "pickup") {
    return "Ви можете забрати замовлення самостійно";
  } else
    return "Замовлення буде доставлено у поштомат";
}

// ✅ Приклад виклику:


console.log(getDeliveryMessage("pickup"));
console.log(getDeliveryMessage("courier"));
console.log(getDeliveryMessage("locker"));

// => Замовлення буде доставлено у поштомат

console.log("=========switch aletrnative================");

// Ось кілька невеликих покращень, які зроблять код ще чистішим і надійнішим:

// ✅ Покращена версія з switch (альтернатива if-else):

type DeliveryType1 = "courier" | "pickup" | "locker";

function getDeliveryMessage1(delivery: DeliveryType1): string {
  switch (delivery) {
    case "courier":
      return "Ваше замовлення буде доставлено кур'єром";
    case "pickup":
      return "Ви можете забрати замовлення самостійно";
    case "locker":
      return "Замовлення буде доставлено у поштомат";
  }
}
console.log(getDeliveryMessage1("locker"));
console.log(getDeliveryMessage1("pickup"));
console.log(getDeliveryMessage1("courier"));

// ✍️ Завдання:
// Створи інтерфейси Product та Category.

// Створи тип CategoryResponse, що об’єднує HttpResponse і масив категорій.

// Створи змінну categories з цими даними.

// Виведи в консоль всі назви продуктів з категорії "Books".

interface Product {
  id: number;
  title: string;
  price: number;
}

interface Category {
  categoryId: number;
  name: string;
  products: Product[];
}

interface HttpResponse {
  status: number;
  message: string;
}

type CategoryResponse = HttpResponse & {data: Category[]}

const categories: CategoryResponse = 
{
  "status": 200,
  "message": "Categories fetched",
  "data": [
    {
      "categoryId": 1,
      "name": "Electronics",
      "products": [
        { "id": 201, "title": "Smartphone", "price": 699 },
        { "id": 202, "title": "Laptop", "price": 1200 }
      ]
    },
    {
      "categoryId": 2,
      "name": "Books",
      "products": [
        { "id": 203, "title": "Clean Code", "price": 35 },
        { "id": 204, "title": "You Don’t Know JS", "price": 28 }
      ]
    }
  ]
}

console.log(categories.data);

// ✅ 3. Вивід назв продуктів з категорії "Books"

const booksCategory = categories.data.find(cat => cat.name === "Books");

if (booksCategory) {
  booksCategory.products.forEach(product => {
    console.log(product.title);
  });
}

// ✅ 3. Вивід назв продуктів і ціни з категорії "Electronics"

const electronicCategory = categories.data.find(cat => cat.name === "Electronics");

if (electronicCategory) {
  electronicCategory.products.forEach(product => {
    console.log(product.title, product.price);
    
  });
}

console.log("=============Типізація функцій================");

// =============Типізація функцій================

// TypeScript дозволяє вказувати типи аргументів і значення, яке повертає функція. Це допомагає уникнути помилок і зробити код більш передбачуваним.



// Типізація аргументів

// Аргументи функції можна типізувати так само, як і звичайні змінні:

function greet1(name: string, age: number): void {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet1("Alice", 30); // ✅

function greet2(name: string, age: number): void {
  console.log(`Hello, I am Alice's dog ${name} and I am ${age} years old.`);
}

greet2("Mango", 5);

// greet(25, "Alice"); 
// ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// name: string – означає, що перший параметр name очікує рядок.
// age: number – означає, що другий параметр age очікує число.
// void – вказує, що функція не повертає значення. Тип значення, що повертається, вказується після списку аргументів.


// Тип void у TypeScript використовується для позначення відсутності значення у функціях, що повертається.

console.log("==Тип значення, яке повертає функція==");

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

interface User {
  id: number;
  name: string;
  email: string;
}

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const userList: User[] = [
  { id: 1, name: 'Alice', email: 'alib@com' },
  { id: 2, name: 'Bob', email: 'bob@com' },
  { id: 3, name: 'Charlie', email: 'cha@com' },
  { id: 4, name: 'Poly', email: 'poly@com'},
];

const names = getUserNames(userList);
console.log(names); // ['Alice', 'Bob', 'Charlie']
console.log();


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
////////////////////////////////////////////////////////
//////CHAT GPT TASK//////////////////

// Напиши функцію introduce, яка приймає:
// name: string — ім'я (обов’язковий параметр)
// city?: string — назва міста (необов’язковий параметр)
// Функція повинна виводити в консоль:
// Якщо місто передано:
// Hi, I'm {name} from {city}.
// Якщо місто не передано:
// Hi, I'm {name}.

function introduce(name: string, city?: string) {
  if (city !== undefined) {
    console.log(`Hi, I'm ${name} from ${city}`);    
  } else {
    console.log(`Hi, I'm ${name}`);
    
  }
}

// ✅ Приклади виклику:
introduce("Emma", "London"); // Hi, I'm Emma from London.
introduce("Liam");           // Hi, I'm Liam.
// introduce("Noah", 123);   // ❌ Помилка: тип не збігається

//*****************************************//
console.log("===Function Type (Тип функції)===");

// Function Type (Тип функції)

// У TypeScript можна визначати не тільки окремі параметри та типи значень, що повертаються, а й описувати форму всієї функції за допомогою Function Type.

// Function Type визначає, які аргументи приймає функція та яке значення повертає. Для цього використовують type.

type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (x, y) => x + y;

console.log(add(2, 3)); // 5

// AddFunction - це тип функції, що приймає два числа та повертає число.
// add - функція, яка реалізує цей тип.

// це не просто generics, а ще й функції з generic типом (function type with generics).

function myFunction<T>(value: T): T {
  return value;
}

console.log(myFunction<string>("Hello")); // "Hello"
console.log(myFunction<number>(42)); // 42

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([10, 20, 30])); // 10
console.log(getFirstElement<string>(["Alice", "Bob"])); // "Alice"











/**
 * *************************************************************************************************************
 * 
 * 06/05/2025 lesson-1
//  * 
//  */
// console.log("06/05/2025 lesson-1");


// let age = 5;

// const numbers = [1, 2, 3]; 
