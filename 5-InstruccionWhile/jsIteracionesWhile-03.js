/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let mensaje;
	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != "utn750"){
		claveIngresada = prompt("Error, ingrese la clase correcta");
	}

	mensaje = "Felicidades, ingreso correctamente la clave";
	alert(mensaje);
}//FIN DE LA FUNCIÓN
