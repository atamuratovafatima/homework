

supplementName = [
    {
        brandName:'Now Foods',
        supplements: [
            {
                name:'vitamin d3', 
                price:11.02, 
                describtion: 'Vitamin D3 Benefits for Babies. Many pediatricians recommend vitamin D supplementation for infants because breastfed babies generally do not obtain adequate vitamin D from other sources. Vitamin D helps the body absorb calcium and phosphorus, which are two minerals important for building strong bones and teeth.* Ensuring your baby gets enough of this important vitamin during their early months may help to support their health as they grow.'
            },
            {
                name:'Omega 3', 
                price:14.20, 
                describtion: 'Omega 3 Benefits for Babies. Many pediatricians recommend omega 3 supplementation for infants because breastfed babies generally do not obtain adequate vitamin D from other sources. Vitamin D helps the body absorb calcium and phosphorus, which are two minerals important for building strong bones and teeth.* Ensuring your baby gets enough of this important vitamin during their early months may help to support their health as they grow.'
            }
        ],
        result: function(brandName){
            if(this.brandName.includes(brandName)){
                this.supplements.forEach(element => {
                    console.log(this.brandName + ": " + element.name);
                });
            }
            else{
                console.log(':(');
            }
        }
    },
    {
        brandName:'Solgar',
        supplements: [
            {
                name:'Magnesium', 
                price:18.02, 
                describtion: 'Magnesium Benefits for Babies. Many pediatricians recommend vitamin D supplementation for infants because breastfed babies generally do not obtain adequate vitamin D from other sources. Vitamin D helps the body absorb calcium and phosphorus, which are two minerals important for building strong bones and teeth.* Ensuring your baby gets enough of this important vitamin during their early months may help to support their health as they grow.'
            },
            {
                name:'Selenium', 
                price:14.20, 
                describtion: 'Magnesium Benefits for Babies. Many pediatricians recommend omega 3 supplementation for infants because breastfed babies generally do not obtain adequate vitamin D from other sources. Vitamin D helps the body absorb calcium and phosphorus, which are two minerals important for building strong bones and teeth.* Ensuring your baby gets enough of this important vitamin during their early months may help to support their health as they grow.'
            }
        ],
        result: function(brandName){
            if(this.brandName.includes(brandName)){
                this.supplements.forEach(element => {
                    console.log(this.brandName + ": " + element.name);
                });
            }
            else{
                console.log(':(');
            }
        }
    },

];


supplementName[1].result('Solgar');
supplementName[0].result('Now Foods');
