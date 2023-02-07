/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
// function mostrar()
// {
// 	let Nombre;
// 	Nombre = document.getElementById("txtIdNombre").value;
// 	alert(Nombre);


// }
/*
Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo.

let nombreIngresado;
	nombreIngresado = document.getElementById("txtIdNombre").value;
	
	alert("Su nombre: " + nombreIngresado);l
	*/

	function mostrar()
	{
	  let precio;
	  let aumento;
	  let descripción;
	  let precioAumento;

	  precio = parseInt(document.getElementById("txtIdNombre").value);
	  descripción = prompt("Ingresa tu descripcion lindo ");

	  aumento = (precio * 30) / 100;

	  precioAumento = precio + aumento; 

	  alert(descripción + " su valor es " + precioAumento);

	  
	  
	}
