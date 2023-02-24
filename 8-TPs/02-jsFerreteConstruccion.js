/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    // el perimero de un rectangulo se saca haciendo el largo * 2 + base * 2 o largo + ancho * 2 //
    // el perimetro de alambre lo tengo que multiplicar por 3 ya que la persona quiere 3 filas de alambre //

    let largoTerreno;
    let anchoTerreno;
    let perimetro;
    let alambre;

    //usar parsefloat para numeros que NO SEAN ENTEROS y TAMBIEN ENTEROS //
    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = largoTerreno * 2 + anchoTerreno * 2; 

    alambre = perimetro * 3;

    alert("Su cantidad de alambre a comprar es " + alambre);

}
function Circulo () 
{
    // tengo que crear un radio y mostar la cantidad de alambre que tiene que compar//
    // perimero de un circulo es = 2 * pi=3,14 * R
    let radio;
    let perimetro;
    let alambre;

    //usar parsefloat para numeros que NO SEAN ENTEROS y TAMBIEN ENTEROS //
    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = largoTerreno * 2 + anchoTerreno * 2; 

    alambre = perimetro * 3;

    alert("Su cantidad de alambre a comprar es " + alambre);
    

}
function Materiales () 
{
    //tengo que sacar el area de el rectangulo de el terreno que es el largo * el ancho//
    //para sacar las bolsas tengo que hacer m2 * semento y m2* cal//

    let cemento;
    let cal;
    
}