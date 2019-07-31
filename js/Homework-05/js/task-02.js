"use strict";

// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

class User {
    constructor({name, age, followers}) {
        this._name = name;
        this._age = age;
        this._followers = followers;
    }

    getInfo() {
        return `User: ${this._name}is ${this._age} years old and has ${this._followers} followers`;
    }
}

const mango = new User({ name: 'Mango', age: 2, followers: 20 });

console.log(mango.getInfo());
 // User Mango is 2 years old and has 20 followers

const poly = new User({ name: 'Poly', age: 3, followers: 17 });
console.log(poly.getInfo());
 // User Poly is 3 years old and has 17 followers