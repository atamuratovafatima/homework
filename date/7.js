//7) Узнайте, какой был 7-го января 2015 года

let date = new Date(2015, 0, 7);
let result = date.getDay();
let week = ['ponedelnik', 'vtornik', 'sreda', 'chetverg', 'pyatnica', 'subbota', 'vs'];
console.log(week[result]);
