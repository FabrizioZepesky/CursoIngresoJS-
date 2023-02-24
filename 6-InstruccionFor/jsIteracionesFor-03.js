function mostrar()
{
	let mensaje;
	let cantRep;

	mensaje = " Hola UTN FRA <br>"
	cantRep = parseInt(prompt("Pone un numero posho"));

	for(let i = 0; i < cantRep; i++)
	{
		document.write(mensaje);
	}

}