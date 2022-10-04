//1)  Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.

let now = new Date();
let fullYear = now.getFullYear();
let month = now.getMonth()+1;
let date = now.getDate();

console.log(fullYear + '-' + month + '-' + date);