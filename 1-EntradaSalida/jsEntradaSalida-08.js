/*Fabrizio Zepesky
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 .""
function SacarResto()
{
  let dividendo;
  let divisor;
  let resto;

  dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
  divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

  resto = dividendo % divisor;

  alert("su resto es " + resto);

}
*/

function SacarResto()
{
  /*Ejercicio 8.bis: Ingresar dos numeros por id
  Se pide:
  mostrar por alert:
  a) La suma de los dos numeros
  b) El promedio de los numeros
  c) El resto de los numeros (el primero en modulo del segundo)
  */

  let precioUno;
  let precioDos;
  let sumaPrecios;
  let promedio;
  let resto;

  precioUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
  precioDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);

  sumaPrecios = precioUno + precioDos;

  promedio = sumaPrecios / 3;

  resto = precioUno % precioDos;

  console.log(sumaPrecios);
  alert("El resto de los precios es " + resto);
  
}