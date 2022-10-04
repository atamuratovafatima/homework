let order = {
    id: 23,
    name: 'Fatima U',
    payed: false,
    showInfo: function(){
        if(this.payed===true){
            console.log('Id: ' + this.id  + '; Client name: '+ this.name + '; Order status: Статус получателя \"Подтверждено\"');
        }
        else{
            console.log('Id: ' + this.id  + '; Client name: '+ this.name + '; Order status: Пополните отрицательный баланс');
        }
    }
}

order.showInfo();