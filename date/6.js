//6) Выведите на экран текущий день недели (словом, по-русски). 
//Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски

let date = new Date();
let dayOfTheWeek = date.getDay();
console.log(dayOfTheWeek)

let week = ['Ponedelnik', 'Vtornik', 'Sreda', 'Chetverg', 'Pyatnica', 'Suubota', 'Vs'];

for(let i=0; i<week.length; i++){
    if(dayOfTheWeek===i){
        console.log(week[i]);
    }
}