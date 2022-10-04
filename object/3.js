let weight;
let medicine = {
    weight: weight,
    cargo4: 4,
    cargo8: 8,
    cargo11: 11,
    service: 3,
    countPrice: function(price, weight){
        if(weight < 0.3){
            let priceWithCargo = price + this.cargo4 + this.service
            console.log('Total price with cargo: ' + priceWithCargo);
        }
        else if(weight < 0.7){
            let priceWithCargo = price + this.cargo8 + this.service
            console.log('Total price with cargo: ' + priceWithCargo);
        }
        else if(weight < 1){
            let priceWithCargo = price + this.cargo11 + this.service
            console.log('Total price with cargo: ' + priceWithCargo);
        }
        else{
            console.log('Our admin will count for you.');
        }
    }
}

medicine.countPrice(11, 1.5);