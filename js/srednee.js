/*function Raschet(){

    var qlot=document.form5.qlot.value;
    var plot=document.form5.plot.value;
    var qlotnew=document.form5.qlotnew.value;
    var plotnew=document.form5.plotnew.value;
    if (qlot.length==0||plot.length==0||qlotnew.length==0||plotnew.length==0|| qlot==0||plot==0||qlotnew==0||plotnew==0){
            alert("Значения не введены!!!");
            return 0;
    }
    //var sum1=parseFloat(qlot)*parseFloat(plot);
    //var sum2=parseFloat(qlotnew)*parseFloat(plotnew);
    var n1=parseFloat(qlot);
    var n2=parseFloat(qlotnew);
    var sum1=n1*parseFloat(plot);
    var sum2=n2*parseFloat(plotnew);
    var sr=(sum1+sum2)/(n1+n2);
    document.form5.plotsr.value=sr.toFixed(3);
    }
    function Clear(){
    document.form5.qlot.value="";
    document.form5.plot.value="";
    document.form5.qlotnew.value="";
    document.form5.plotnew.value="";
    document.form5.plotsr.value="0";
    } */

// Значения из текстовых инпутов
const qlotInput = document.getElementById("qlot");
const plotInput = document.getElementById("plot");
const plotnewInput=document.getElementById("plotnew");
const qlotnewInput=document.getElementById("qlotnew");

// Значения из Range
const qlotRange = document.getElementById("qlot-range");
const plotRange = document.getElementById("plot-range");
const qlotnewRange=document.getElementById("qlotnew-range");
const plotnewRange=document.getElementById("plotnew-range");

// Все инпуты
const inputsValue=document.querySelectorAll('.input');
//console.log (inputsValue);

// Все Ranges
const rangesValue=document.querySelectorAll('.range');
//console.log (rangesValue);

// Выходные данные
const plotsr=document.getElementById("plotsr");

//-----------Функции-------------------------------------------------------

// Функция связывающая input c range
function asignValue() {
        qlotInput.value=qlotRange.value;
        plotInput.value=plotRange.value;
        qlotnewInput.value=qlotnewRange.value;
        plotnewInput.value=plotnewRange.value;
 }
 
 // Функция связывающая range c input
 function asignRange() {
       qlotRange.value=qlotInput.value;
       plotRange.value=plotInput.value;
       qlotnewRange.value=qlotnewInput.value;
       plotnewRange.value=plotnewInput.value;
 }
 asignValue();
 asignRange();

 // Функция вычисления  и вывода результата
 const calculate =(qlot,plot,qlotnew,plotnew)=> {
        let n1=parseFloat(qlot);
        //console.log("qlot="+qlot);
        let n2=parseFloat(qlotnew);
        //console.log("qlotnew="+qlotnew);
        let sum1=n1*parseFloat(plot);
        //console.log("qlot*plot="+sum1);
        let sum2=n2*parseFloat(plotnew);
        //console.log("plotnew="+plotnew);
        //console.log("qlotnew*plotnew="+sum2);
        let sr=(sum1+sum2)/(n1+n2);
        //console.log("sr="+sr);
        plotsr.value=sr.toFixed(3);
 }

 //  Oбработка inputs и ranges
for (input of inputsValue) {
   input.addEventListener ('input', function() {             
       asignRange();
       calculate (qlotRange.value, plotRange.value, qlotnewRange.value, plotnewRange.value);
       //calculate (stoimostInput.value, divInput.value, nalogInput.value);
   })
}

for (range of rangesValue) {
    range.addEventListener ('input', function () {
       asignValue();
       calculate (qlotInput.value, plotInput.value, qlotnewInput.value, plotnewInput.value);
    })
}
