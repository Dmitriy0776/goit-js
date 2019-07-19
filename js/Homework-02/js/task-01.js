"use strict";

// Используя методы массива, последовательно выполни указанные операции над массивом имен пользователей.

// Удалить первый элемент массива
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
const users = ["Mango", "Poly", "Ajax", "Chelsey"];

console.log(users.shift());
console.log("Удален первый элемент массива", users);

// Удалить последний элемент массива
// console.log(users); // ["Poly", "Ajax"]

console.log(users.pop());
console.log("Удален последний элемент массива", users);

// Добавить в начало массива пользователя "Lux"

console.log(users.unshift("Lux"));
console.log('Добавлено в начало массива пользователя "Lux"', users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

console.log(users.push("Jay", "Kiwi"));
console.log(
  'Добавлено в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию',
  users
);

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = "Ajax";
console.log(users.splice(users.indexOf(userToDelete), 1));
console.log(
  "Удалить из массива элемент хранящийся в переменной userToDelete",
  users
); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя хранящегося в переменной userToInsert, перед пользователем хранящимся в переменной insertBefore
const userToInsert = "Kong";
const insertBefore = "Jay";
console.log(users.splice(2, 0, userToInsert)); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
console.log(
  "Добавить в массив пользователя хранящегося в переменной userToInsert",
  users
);
