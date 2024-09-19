document.getElementById('btn-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = document.getElementById('amount').value;
   const pinCode = document.getElementById('pin-code').value;
   console.log(addMoney, pinCode);
   if(addMoney === '10' && pinCode === '23456'){
    
   }
})