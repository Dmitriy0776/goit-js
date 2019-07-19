"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

// добавляет поле mood со значением 'happy'

user.mood = "happy!";

console.log("user :", user);

// заменяет значение hobby на 'javascript'

for (const key in user) {
  user.hobby = "javascript";
}

console.log("user :", user);

// заменяет значение premium на false

for (const key in user) {
  user.premium = "false";
}

console.log("user :", user);

// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const keys = Object.keys(user);

for (const key of keys) {
  console.log("Value: ", user[key]);
}
