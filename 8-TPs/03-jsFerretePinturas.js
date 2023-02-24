/*3. Fabrizio Zepesky 	
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //formula para pasar F a C (32 °F − 32) × 5/9 = 0 °C//
    let fahrenheit;
    let centígrados;

    fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);
    
    centígrados = (fahrenheit - 32) * 5/9;

    alert(fahrenheit + " fahrenheit es igual a " + centígrados);
}

function CentigradosFahrenheit () 
{
    let CentigradosFahrenheit;
    let FahrenheitCentigrados;

    CentigradosFahrenheit = parseFloat(document.getElementById("txtIdTemperatura")).value;

    FahrenheitCentigrados = (CentigradosFahrenheit * 9/5) + FahrenheitCentigrados;


    console.log(FahrenheitCentigrados);

    
}
