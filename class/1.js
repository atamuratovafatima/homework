function Mahalla(fio, vozrast, zanyatost){
    this.fio = fio;
    this.vozrast = vozrast;
    this.zanyatost = zanyatost;
    this.showInfo = function(){
        return this.fio + ": " + this.vozrast + ' years old, works as a ' + this.zanyatost;
    }
}

let Fatima = new Mahalla('Fatima UK', 27, 'QA');
console.log(Fatima.showInfo())