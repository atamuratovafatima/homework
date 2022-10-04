//8) Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse
let dateNow = Date.now();
let datePast = Date.parse(1988, 2, 1);
console.log(dateNow - datePast);