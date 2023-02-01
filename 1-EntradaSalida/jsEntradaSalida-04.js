/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let Nombrelol;

	Nombrelol = prompt("Pone tu nombre posho");

	document.getElementById("txtIdNombre").value = Nombrelol;
}