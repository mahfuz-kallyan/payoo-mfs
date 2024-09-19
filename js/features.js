document.getElementById('show-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('addmoney-form').classList.add('hidden');
})


document.getElementById('btn-addmoney').addEventListener('click',function(){
    document.getElementById('addmoney-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})