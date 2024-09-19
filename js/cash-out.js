document.getElementById('btn-cashout').addEventListener('click', function(event){
     event.preventDefault();
     const amount = document.getElementById('cash-out').value;
     const pin = document.getElementById('cashout-pin').value;
     const amountNumber = parseFloat(amount);
     if(pin === '1234'){
        const balance = document.getElementById('balance').innerText;
        const balanceAmount = parseFloat(balance);
        const cashOut = balanceAmount - amountNumber;
        document.getElementById('balance').innerText = cashOut;
     }
     else{
        alert('please try again later')
     }
})