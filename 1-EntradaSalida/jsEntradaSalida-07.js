/* Alumno Fabrizio Zepesky
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
  let NumeroUno;
  let NumeroDos;
  let Resultado;

  NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
  
  Resultado = (NumeroUno) + (NumeroDos);

  alert (Resultado);
}

function restar()
{	
  let NumeroUno;
  let NumeroDos;
  let Resultado;

  NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
  
  Resultado = (NumeroUno) - (NumeroDos);

  alert (Resultado);
}

function multiplicar()
{ 
  let NumeroUno;
  let NumeroDos;
  let Resultado;

  NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
  NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
  
  Resultado = (NumeroUno) * (NumeroDos);

  alert (Resultado);
}

function dividir()
{
    let NumeroUno;
    let NumeroDos;
    let Resultado;
  
    NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
    
    Resultado = (NumeroUno) / (NumeroDos);
  
    alert (Resultado);
}
