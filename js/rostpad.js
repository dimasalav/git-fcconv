
// Значения из текстовых инпутов
const chislo1_Input = document.getElementById("chislo1");
const chislo2_Input = document.getElementById("chislo2");

// Значения из Range
const chislo1_Range = document.getElementById("chislo1-range");
const chislo2_Range = document.getElementById("chislo2-range");

// Все инпуты
const inputsValue=document.querySelectorAll('.input');
//console.log (inputsValue);

// Все Ranges
const rangesValue=document.querySelectorAll('.range');
//console.log (rangesValue);

// Выходные данные
const rost=document.getElementById("rost");
const pad=document.getElementById("pad");

//-----------Функции-------------------------------------------------------

// Функция связывающая input c range
function asignValue() {
    chislo1_Input.value=chislo1_Range.value;
    chislo2_Input.value=chislo2_Range.value;
}
// Функция связывающая range c input
function asignRange() {
   chislo1_Range.value=chislo1_Input.value;
   chislo2_Range.value=chislo2_Input.value;
}

asignValue();
asignRange();

// Функция вычисления  и вывода результата
const calculate = (nach, konech) => {
    //let nach1=parseFloat(nach);
    //console.log(nach);
    //let konech1=parseFloat(konech);
    //console.log(konech);
    if (nach=="0") {
        rost.value="0";
        pad.value="0";
        return false;
    }
    let result=((konech-nach)*100)/nach;
    //console.log(result);
    if(result>=0) {
       rost.value=result.toFixed(3);
       pad.value="0";
       //console.log (typeof(rost.value));
   }
   if(result<=0) {
      pad.value=result.toFixed(3);
      rost.value="0";
      //console.log (typeof(pad.value));
   }
}

//  Oбработка inputs и ranges
for (input of inputsValue) {
    input.addEventListener ('input', function() {
             
        asignRange();
        calculate (chislo1_Range.value, chislo2_Range.value);
        
    })
 }
 
 for (range of rangesValue) {
     range.addEventListener ('input', function () {
        asignValue();
        calculate (chislo1_Input.value, chislo2_Input.value);
     }) 
 }