'use strict'
//consts
const billAmount=document.querySelector('#inputBill');
const tipsContainer=document.querySelector('.tips');
const tips=document.querySelectorAll('.tip .btn');
const customBtn=document.querySelector('#customBtn');
const geustNumber=document.querySelector('#num-geust');
const tipPerPerson=document.querySelector('.tip-person')
const totalPerPerson=document.querySelector('.tipTotal')
const resetBtn=document.querySelector('#reset') 
const dollarIcon=document.querySelector('.dollar');
const personIcon=document.querySelector('.person')
//on focus bull and gesut num
 function onFocus(item){
     item.style.display='none'
 }
 billAmount.addEventListener('focusin',function(){
     dollarIcon.style.display='none'
 })
 geustNumber.addEventListener('focusin',function(){
     personIcon.style.display='none'
 })
//tips container
tipsContainer.addEventListener('click',function(e){
    let numGeust,bill;
    const tip=Number(e.target.dataset.id);
    if(tip){
        tips.forEach(tip=>tip.classList.remove('active'));
        e.target.classList.add('active');
        calcTip(numGeust,bill,tip)
    } 
})
//on enter geust number
function calcTip(numGeust,bill,tip){
    geustNumber.addEventListener('keypress',function(e){
        if(e.key==='Enter'){
            bill=Number(billAmount.value);
            numGeust=Number(geustNumber.value);
            if(numGeust==='' || numGeust===0 ) return
            if(bill==='' || bill===0 ) return
            const totalTips=bill*tip;
            const tipPerson=totalTips/numGeust;
            tipPerPerson.textContent=`$${tipPerson.toFixed(2)}`;
            totalPerPerson.textContent=`$${totalTips.toFixed(2)}`;
            billAmount.value='';
            geustNumber.value='';
            customBtn.value='';
            tips.forEach(tip=>tip.classList.remove('active'));
            dollarIcon.style.display='block';
            personIcon.style.display='block';
        }
    })
}
//custom btn
customBtn.addEventListener('keypress',function(e){
    let numGeust,bill;
    if(e.key==='Enter'){
        tips.forEach(tip=>tip.classList.remove('active'))
        const customTip=(Number(customBtn.value))/100
        calcTip(numGeust,bill,customTip)
        
    }
})
//reset btn
resetBtn.addEventListener('click',function(e){
    e.preventDefault();
    tips.forEach(tip=>tip.classList.remove('active'))
    tipPerPerson.textContent=`$0.00`;
    totalPerPerson.textContent=`$0.00`;
})