let balance = {
    id:45,
    name: 'John',
    surname: 'Doe',
    phoneNumber: '998979990099',
    companyCode: function(){
        let numbSlice = this.phoneNumber.slice(0, 5);
        if(numbSlice === '99890' || numbSlice === '99891'){
            console.log('Beeline');
        }
        else if(numbSlice === '99893' || numbSlice === '99894'){
            console.log('Ucell' )
        }
        else if(numbSlice === '99897'){
            console.log('UMS')
        }
    } 
}   
balance.companyCode()