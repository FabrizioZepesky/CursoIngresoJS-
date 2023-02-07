function mostrar()
// Fabrizio Zepesky
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 17)
	{
		alert("Sos mayor de edad");
	}
	else 
	{
		alert("Sos menor de edad");
	}
}
	//FIN DE LA FUNCIÓN