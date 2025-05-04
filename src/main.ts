import './style.css'
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

