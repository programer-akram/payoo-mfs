document.getElementById('add-btn').addEventListener('click',function(){
    document.getElementById('cash-out-form').style.display = 'none';
    document.getElementById('add-money-form').style.display = 'block'
})

document.getElementById('out-btn').addEventListener('click',function(){
    document.getElementById('add-money-form').style.display = 'none';

    document.getElementById('cash-out-form').style.display = 'block';
})




document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    let currentBalance =document.getElementById('balance').innerText ;
    let addBalance = document.getElementById('add-money-amount').value;
    let pin =document.getElementById('add-pin-number').value;
    console.log(pin, typeof pin);
    if(pin == 41){
        let updateBalance = Number(currentBalance)   + Number(addBalance) ;
        document.getElementById('balance').innerText = updateBalance; 

    }else{
        alert('Wrong pin number')
    }

})


document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    let currentBalance =document.getElementById('balance').innerText ;
    let currentBalanceNumber = Number(currentBalance);
   let cashOutAmount = document.getElementById('cash-out-amount').value;
   let cashOutAmountNumber = Number(cashOutAmount);
   let pin = document.getElementById('out-pin-number').value;

   if( pin == 41){
    let updateBalance = currentBalanceNumber - cashOutAmountNumber;
    document.getElementById('balance').innerText = updateBalance;
   }else{
    alert('wrong pin number')
   }


})

