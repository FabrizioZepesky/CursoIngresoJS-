/*1. Fabrizio Zepesky	
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    sumaPrecios = precioUno + precioDos + precioTres;

    console.log(sumaPrecios);
    alert("La suma de sus precios es " + sumaPrecios);

}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let promedio;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    sumaPrecios = precioUno + precioDos + precioTres;

    promedio = sumaPrecios / 3

    console.log(sumaPrecios);
    alert("El promedio de los precios es " + promedio);
    
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let PrecioFinal;
    let IVA;

    IVA = 21; 

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    sumaPrecios = precioUno + precioDos + precioTres;

    PrecioFinal = sumaPrecios + sumaPrecios * IVA / 100;

    console.log(sumaPrecios);
    alert("La suma de sus precios final con el IVA del 21% es " + PrecioFinal);
}