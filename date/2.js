//2) Выведите на экран текущий месяц словом, по-русски.

let months = new Date().getMonth();

switch(months){
    case 0:
        console.log('Yanvar');
        break;
    case 1:
        console.log('Fevral');
        break;
    case 2:
        console.log('Mart');
        break;
    case 3:
        console.log('Aprel');
        break;
    case 4:
        console.log('May');
        break;    
    case 5:
        console.log('Iyun');
        break;
    case 6:
        console.log('Iyul');
        break;
    case 7:
        console.log('Avgust');
        break;
    case 8:
        console.log('Sentyabr');
        break;
    case 9:
        console.log('Oktyabr');
        break;
    case 10:
        console.log('Noyabe');
        break;
    case 11:
        console.log('Dekabr');
        break;
    }