function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let i;
	let promedio;

	contador=0;
	acumulador=0;

	i= 0;

	while(i < 5)
	{
		i= i + 1

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error,Ingrese un numero")
			numeroIngresado = parseInt(numeroIngresado)
		}
		contador = contador + 1;
		acumulador = acumulador + (numeroIngresado);
	}

	promedio = acumulador / contador;

	document.getElementById("txtUdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
	console.log("esta es la i" + i )

	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN