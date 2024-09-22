document.getElementById('add-btn').addEventListener('click', function(){
    let currentBalance =document.getElementById('balance').innerText ;


    updateBalance = Number(currentBalance)  + 200;
    console.log(Number(updateBalance))

})