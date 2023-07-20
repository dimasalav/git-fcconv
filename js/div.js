// Значения из текстовых инпутов
const stoimostInput = document.getElementById("stoimost");
const divInput = document.getElementById("div");
const nalogInput=document.getElementById("nalog");
console.log(typeof stoimostInput.value);
console.log(typeof divInput.value);



// Значения из Range
const stoimostRange = document.getElementById("stoimost-range");
const divRange = document.getElementById("div-range");
const nalogRange=document.getElementById("nalog-range");

//console.log(stoimost);


// Все инпуты
const inputsValue=document.querySelectorAll('.input');
//console.log (inputsValue);


// Все Ranges
const rangesValue=document.querySelectorAll('.range');
//console.log (rangesValue);


// Выходные данные
const dohod1Out=document.getElementById("dohod1");
const dohod2Out=document.getElementById("dohod2");


//-----------Функции-------------------------------------------------------

// Функция связывающая input c range
function asignValue() {
       stoimostInput.value=stoimostRange.value;
       divInput.value=divRange.value;
       nalogInput.value=nalogRange.value;
}

// Функция связывающая range c input
function asignRange() {
      stoimostRange.value=stoimostInput.value;
      divRange.value=divInput.value;
      nalogRange.value=nalogInput.value;
}

asignValue();
asignRange();

// Функция вычисления  и вывода дохода
const calculate = (st=0.01, dv=0, nl=13) => {
     
     let dohod1=(dv*100)/st;
     //nl=nl/100;
     dv=dv-(dv*(nl/100));
     let dohod2=(dv*100)/st;
     //console.log (typeof dv);

     if (dohod1 <= 0 || dohod2 <= 0) {
        
        dohod1Out.value=0;
        dohod2Out.value=0;
        return false;
     }
     else {
         dohod1Out.value=dohod1.toFixed(3);
         dohod2Out.value=dohod2.toFixed(3);
     }

}

//  Oбработка inputs и ranges
for (input of inputsValue) {
   input.addEventListener ('input', function() {
       
       if(stoimostInput.value==="" || divInput.value===""){
          dohod1Out.value=0;
          dohod2Out.value=0;
          return false;
       }
       asignRange();
       calculate (stoimostRange.value, divRange.value, nalogRange.value);
       //calculate (stoimostInput.value, divInput.value, nalogInput.value);
   })
}

for (range of rangesValue) {
    range.addEventListener ('input', function () {
       asignValue();
       calculate (stoimostInput.value, divInput.value, nalogInput.value);
    })

}



