
function Jurnal(student, ocenki){
    this.student = student;
    this.ocenki = ocenki;
    this.result = function(){
        return this.student + ': ' + this.ocenki;
    }
}

let jurnal = new Jurnal('Fatima', [4, 5, 5, 3, 2]);
let itogOcenka = jurnal.ocenki;
let sum=0;
let itogovayaOcenka, total; 

for(let i=0; i<itogOcenka.length; i++){
    total = sum+=itogOcenka[i];
    itogovayaOcenka = total / itogOcenka.length;
}

console.log(jurnal.student + ": " + jurnal.ocenki + ' Itogovaya ocenka ' + itogovayaOcenka);