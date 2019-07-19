"use strict";

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

const countProps = function(obj) {
  const values = Object.values(obj);
  let total = 0;
  for (const value of values) {
    if (value) {
      total += 1;
    }
  }
  return total;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
