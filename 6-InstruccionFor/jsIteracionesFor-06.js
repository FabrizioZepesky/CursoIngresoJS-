function mostrar()
{
	let numero;
	let contadorPar;

	numero = parseInt(prompt("Ingresa un numero"));

	contadorPar = 0;

	for(let i = 1; i <= numero; i++ )
	{
		if(i % 2 == 0)
		{
			contadorPar = contadorPar + 1;
			console.log(i)
		}
	}
	console.log("la cantidad de pares es " + contadorPar);

}//FIN DE LA FUNCIÓN