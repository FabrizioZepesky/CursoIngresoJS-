/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()
{
    let NombreLoL;
    let edad;

    NombreLoL = document.getElementById("txtIdNombre").value;

    edad = document.getElementById("txtIdEdad").value; 

    alert("Usted se llama " + NombreLoL + " y tiene " + edad + " años ");
}	
*/

function mostrar()

{
	/*Ejercicio 5.bis: 
 	se debe mostrar un mensaje :
 	"Perez , usted se llama jose y tiene 66 años"
	se debe optener el apellido , de la manera que puedan
	*/

	let nombre;
	let apellido;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
    apellido = document.getElementById("txtIdEdad").value;

    mensaje = (" Su nombre es " + nombre + " tiene 66 años y su apellido es " + apellido );

    alert(mensaje);
}