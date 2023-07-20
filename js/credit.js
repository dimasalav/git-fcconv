//------Значения из текстовых инпутов-----------------------------------------
const inp1=document.getElementById('input1'),
      inp2=document.getElementById('input2'),
      inp3=document.getElementById('input3');
      inp4=document.getElementById('input4');

//-----Значения из range инпутов--------------------------------------------
const rang1=document.getElementById('range1'),
      rang2=document.getElementById('range2'),
      rang3=document.getElementById('range3'); 
      rang4=document.getElementById('range4'); 
      
//------Итоговые значения---------------------------------------------------
const outp1=document.getElementById('output1'),
      outp2=document.getElementById('output2'),
      outp3=document.getElementById('output3');  
//------Все input----------------------------------------------------------     
const inputsValue=document.querySelectorAll('.input');    
 //-----Все range----------------------------------------------------------
 const inputsRange=document.querySelectorAll('.range');
 
 //---Функция связывающая текствые input с range
 const assignValue =()=>{
        inp1.value=rang1.value;
        inp2.value=rang2.value;
        inp3.value=rang3.value;
        inp4.value=rang4.value;
 }
 const assignRange =()=>{
        rang1.value=inp1.value;
        rang2.value=inp2.value;
        rang3.value=inp3.value;
        rang4.value=inp4.value;
 }

 //-------------------------------------------------------------------------
 assignValue();
 assignRange(); 
//-----------------------------------------------------------------------------
for(let input of inputsValue) {
    //console.log (input);
    input.addEventListener('input', ()=>{
       assignRange();
       //console.log(inp1.value);
       calculation(inp1.value,inp2.value,inp3.value,inp4.value);
    })
}



for(let input of inputsRange) {
    //console.log (input);
    input.addEventListener('input', ()=>{
       assignValue();
       //console.log(inp1.value);
       calculation(inp1.value,inp2.value,inp3.value,inp4.value);
    })
}

//---Расчет кредита--------------------------------------------------------
const calculation=(inp1=0,inp2=100000,inp3=1,inp4=8)=> {
    /*
         ЕП-Ежемесячный платеж
         РК-Размер кредита
         ПС-процентная ставка
         КМ-колво месяцев

         ЕП=(РК+(((РК/100)*ПС)/12)*КМ)/КМ;
    */
   let monthlyPayment; //Eжемесячный платеж
   let lounAmount=inp1-inp2; //Размер кредита
   //let interestRate=currentPrecent; //Процентная ставка
   let interestRate=inp4; //Процентная ставка
   let numberOfYears=inp3;//creditTerm; //Кол-во лет
   let numberOfMonths=12*numberOfYears;//Количество месяцев

   monthlyPayment=(lounAmount+(((lounAmount/100)*interestRate)/12)*numberOfMonths)/numberOfMonths;
   
   const monthlyPaymentArounded=Math.round(monthlyPayment);//Округление
   //console.log(monthlyPaymentArounded);
   if (monthlyPaymentArounded<0){
       return false;
   }
   else {
       /*outp1.innerHTML=`${lounAmount} руб.`;
       outp2.innerHTML=`${monthlyPaymentArounded} руб.`;
       outp3.innerHTML=`${monthlyPaymentArounded+((monthlyPaymentArounded/100)*35)} руб.`;*/

       outp1.value=`${lounAmount} руб.`;
       outp2.value=`${monthlyPaymentArounded} руб.`;
       outp3.value=`${monthlyPaymentArounded+((monthlyPaymentArounded/100)*35)} руб.`;

   }
}


