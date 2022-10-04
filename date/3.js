// 3)  Выведите на экран текущий день.
//  Выведите на экран текущий месяц.
//  Выведите на экран текущий год
// Выведите на экран номер текущего дня недели

let date = new Date();
let month = date.getMonth();
console.log(month);
let year = date.getFullYear();
console.log(year);
let week = date.getDay();
console.log(week);