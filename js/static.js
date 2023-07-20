let summa=0;
let n=0;
let sr=0;
const chisloInput = document.getElementById("vvod");
const listboxOut=document.getElementById("listbox");
const nOut=document.getElementById("n");
const summaOut=document.getElementById("summa");
const srOut=document.getElementById("sr");
function AddChislo()
{      
      if (chisloInput.value == "")
      {
        alert("Введите число!");
        return false;
      }
      let rezult=listboxOut.value+"\n"+chisloInput.value;
      listboxOut.value=rezult;
      let chislofloat=parseFloat(chisloInput.value);
      summa+=chislofloat;
      summaOut.value=summa.toFixed(3);
      ++n;
      nOut.value=n;
      sr=summa/n;
      srOut.value=sr.toFixed(3);
      chisloInput.value="";
}
function Clear()
{
  summa=0;
  n=0;
  sr=0;
  chisloInput.value="";
  listboxOut.value="";
  nOut.value="0";
  summaOut.value="0";
  srOut.value="0";
}
