
//step-1: set event handler
document.getElementById('login-btn').addEventListener('click', function(event){
   //step-2: prevent default behavior(prevent reloading browser)
    event.preventDefault();  // vejal to beginers
    console.log('login button clicked');

    //step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;

    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)

    if(phoneNumber === '01792999202' && pinNumber === '41'){
        console.log('successfully login')
        window.location.href='./home.html';
    }else{
        console.log('phone number or pin is wrong')
    }
    

    
})




