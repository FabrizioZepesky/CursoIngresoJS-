//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
function mostrar()
{
	let numero;
	let cantDivisores;
	
	cantDivisores = 0;
	numero = parseInt(prompt("Ingrese un numero"));

	for (let i = 1; i <= numero; i++)
	{
		if (numero % i == 0)
		{
			cantDivisores = cantDivisores + 1;
		}

	}
	if(cantDivisores == 2)
	{
		alert("es primo UwU ")
	}
	else
	{
		alert("No es primo UnU ")
	}
	document.write("La cantidad de divisores de " + numero + " es " + cantDivisores);
}