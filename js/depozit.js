// Входные данные
const razmerInput=document.getElementById('razmer');
//console.log(razmerInput);
const srokInput=document.getElementById('srok');
const stavkaInput=document.getElementById('stavka');

const razmerRange=document.getElementById('razmer-range');
const srokRange=document.getElementById('srok-range');
const stavkaRange=document.getElementById('stavka-range');

const chbox=document.getElementById('chbox');


//Выходные данные
const dohodOut=document.getElementById('dohod');
const razmerdohodOut=document.getElementById('razmerdohod');

// Все Инпуты и Рейнджи
const inputsValue=document.querySelectorAll('.input');
const rangesValue=document.querySelectorAll('.range');
const inputs=document.querySelectorAll('input');

// Функции

const asignValue = () => {
     razmerInput.value=razmerRange.value;
     srokInput.value=srokRange.value;
     stavkaInput.value=stavkaRange.value;
} 

const asignRange=()=>{
        razmerRange.value=razmerInput.value;
        srokRange.value=srokInput.value;
        stavkaRange.value=stavkaInput.value;  
}

asignValue();
asignRange();


const d_y=365;
const d_m=30;
const calculate=(razm, sr, st)=>{

        let dohod,razmerdohod;

        if(chbox.checked==true) {
                
                let n=Math.round(sr/d_m);
                let period=d_m;
                let dohod_n=(1+period*(st/(100*d_y)));
                dohod_n=Math.pow(dohod_n,n);
                dohod=(razm*dohod_n)-razm;
                razmerdohod=parseFloat(razm)+parseFloat(dohod);
                dohodOut.value=dohod.toFixed(3);
                razmerdohodOut.value=razmerdohod.toFixed(3);               

        }

        else {
                dohod=razm*sr*(st/(100*d_y));
                dohodOut.value=dohod.toFixed(3);
                razmerdohod=parseFloat(razm)+parseFloat(dohod);
                razmerdohodOut.value=razmerdohod.toFixed(3);

        }

}

for (input of inputsValue) {
        input.addEventListener ('input', function() {
                asignRange();
                //calculate(razmerRange.value,srokRange.value,stavkaRange.value);

        })
}

for (range of rangesValue) {
        range.addEventListener ('input', function() {
                asignValue();
                //calculate(razmerInput.value,srokInput.value,stavkaInput.value);

        })
}

for (  itemInput of inputs) {
        itemInput.addEventListener('input',function (){
                calculate(razmerInput.value,srokInput.value,stavkaInput.value);
        })
}


