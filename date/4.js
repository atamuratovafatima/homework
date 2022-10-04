//4)  Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. 
//Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, 
//которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)

let date = new Date()
let result1 = date.toLocaleDateString();
let result2 = date.toLocaleTimeString();

console.log(result2 + ' ' + result1);  