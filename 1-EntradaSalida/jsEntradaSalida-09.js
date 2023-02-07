/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let porsentaje;

	porsentaje = 10

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	
	resultado = (sueldo / 100) * 10;

	document.getElementById("txtIdResultado").value = resultado; 


}
