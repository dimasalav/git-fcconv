
const rates={};

const elementUSD=document.querySelector('[data-value="USD"]');
const elementEUR=document.querySelector('[data-value="EUR"]');
const elementCNY=document.querySelector('[data-value="CNY"]');
const elementBYN=document.querySelector('[data-value="BYN"]');
const elementKZT=document.querySelector('[data-value="KZT"]');

const input=document.querySelector('#input');
const result=document.querySelector('#result');
const select=document.querySelector('#select');

getCurrencies ();
setInterval(getCurrencies,10000);

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    
    rates.USD=result.Valute.USD;
    rates.EUR=result.Valute.EUR;
    rates.CNY=result.Valute.CNY;
    rates.BYN=result.Valute.BYN;
    rates.KZT=result.Valute.KZT;
    
    elementUSD.textContent=rates.USD.Value.toFixed(2);
    elementEUR.textContent=rates.EUR.Value.toFixed(2);
    elementCNY.textContent=((rates.CNY.Value)).toFixed(2);
    elementBYN.textContent=rates.BYN.Value.toFixed(2);
    elementKZT.textContent=((rates.KZT.Value)/100).toFixed(2);
    
    if(rates.USD.Value>rates.USD.Previous) {
        elementUSD.classList.add('top');
           
    }
    
    else {

        elementUSD.classList.add('bottom');
    }

    if(rates.EUR.Value>rates.EUR.Previous) {
        elementEUR.classList.add('top');
           
    }
    
    else {

        elementEUR.classList.add('bottom');
    }

    if(rates.CNY.Value>rates.CNY.Previous) {
        elementCNY.classList.add('top');
           
    }
    
    else {

        elementCNY.classList.add('bottom');
    }

    if(rates.BYN.Value>rates.CNY.Previous) {
        elementBYN.classList.add('top');
           
    }
    
    else {

        elementBYN.classList.add('bottom');
    }

    if(rates.KZT.Value>rates.KZT.Previous) {
        elementKZT.classList.add('top');
           
    }
    
    else {

        elementKZT.classList.add('bottom');
    }
}

 input.oninput=convertValue;
 select.oninput=convertValue;
 
 function convertValue() {
     if(select.value==="CNY") {
     
        result.value=(parseFloat(input.value)/(rates[select.value].Value)*10).toFixed(2);
     }

     if(select.value==="KZT") {
     
        result.value=(parseFloat(input.value)/(rates[select.value].Value)*100).toFixed(2);
     }
     else {
        result.value=(parseFloat(input.value)/rates[select.value].Value).toFixed(2);
     }
    
 }



