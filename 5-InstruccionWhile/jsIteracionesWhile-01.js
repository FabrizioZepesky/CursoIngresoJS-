/*

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{
	let numeros;
 
	numeros= 1;

	while(numeros < 11 )
	{
		alert(numeros);
		numeros = numeros + 1;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN
*/
function mostrar()
{

	let nombre;
	let edad;
	let mensaje;
	let edadMayor;
	let edadmenor;
	let nombreMenor;
	let nombreMayor;
	let bandera;
	let respuesta;

	bandera = true;
	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");
		edad = parseInt(prompt("ingresa tu edad"));
		while(isNaN(edad) || edad < 0 || edad > 123)
		{
			edad = parseInt(prompt("Error! ingrese una edad en numeros"));
		}
		if(bandera == true)
		{
			nombreMayor = nombre;
			edadMayor = edad;
			nombreMenor = nombre;
			edadmenor = nombre;
			bandera = false;
		}
		else if(edadMayor < edad)
		{
			nombreMayor = nombre;
			edadmenor = edad;
		}
		else if(edadmenor < edad)
		{
			nombreMenor = nombre;
			edadmenor = edad;
		}
		
		respuesta = prompt("Desea ingresar otros datos? SI O NO.")
	}
	mensaje = "La persona menos es " + nombreMenor + " con la edad de " + edadmenor;
	mensaje +=" y la persona mayo es " + nombreMayor + " con la edad de " + edadMayor;
	document.write(mensaje);
	
}