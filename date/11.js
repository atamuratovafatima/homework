//11)  Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг

let date = new Date();
let result = date.toLocaleDateString();
console.log(result)