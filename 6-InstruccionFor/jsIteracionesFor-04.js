function mostrar()
{
	let repetir;

	for(i = 0; i < 1000; i-- )
	{
		repetir = prompt("Ingrese un numero hasta que ponga break");
		if(repetir == "break")
		{
			break;
		}
	}
}