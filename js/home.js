document.getElementById('btn-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = document.getElementById('amount').value;
   const pinCode = document.getElementById('pin-code').value;
   console.log(addMoney, pinCode);
   if(pinCode === '23456'){
    const balanceAmount = document.getElementById('balance').innerText;
    const balanceAmountNumber = parseFloat(balanceAmount);
    const addMoneyNumber = parseFloat(addMoney);
    const newBalance = balanceAmountNumber + addMoneyNumber;
    console.log(newBalance);
    document.getElementById('balance').innerText = newBalance;
   }
   else{
    alert('please try again')
   }
})