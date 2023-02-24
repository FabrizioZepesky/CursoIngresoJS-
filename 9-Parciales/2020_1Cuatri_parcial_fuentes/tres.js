function mostrar()
{
	let tipo, precio, cantidad, marca, fabricante;
let alcoholMasBarato = { precio: Infinity };
let cantidadMasAlta = 0, tipoMasUnidades;
let totalJabones = 0;

for (let i = 1; i <= 5; i++) {
  // Validar tipo
  do {
    tipo = prompt(`Ingrese el tipo del producto ${i} (barbijo/jabón/alcohol):`).toLowerCase();
  } while (tipo !== "barbijo" && tipo !== "jabón" && tipo !== "alcohol");

  // Validar precio
  do {
    precio = parseFloat(prompt(`Ingrese el precio del producto ${i} (entre 100 y 300):`));
  } while (isNaN(precio) || precio < 100 || precio > 300);

  // Validar cantidad
  do {
    cantidad = parseInt(prompt(`Ingrese la cantidad de unidades del producto ${i} (entre 1 y 1000):`));
  } while (isNaN(cantidad) || cantidad <= 0 || cantidad > 1000);

  // Obtener marca y fabricante
  marca = prompt(`Ingrese la marca del producto ${i}:`);
  fabricante = prompt(`Ingrese el fabricante del producto ${i}:`);

  // Actualizar información del alcohol más barato
  if (tipo === "alcohol" && precio < alcoholMasBarato.precio) {
    alcoholMasBarato.precio = precio;
    alcoholMasBarato.cantidad = cantidad;
    alcoholMasBarato.fabricante = fabricante;
  }

  // Actualizar información del tipo con más unidades
  if (cantidad > cantidadMasAlta) {
    cantidadMasAlta = cantidad;
    tipoMasUnidades = tipo;
  }

  // Actualizar total de jabones
  if (tipo === "jabón") {
    totalJabones += cantidad;
  }
}

// Mostrar resultados
console.log(`El alcohol más barato cuesta $${alcoholMasBarato.precio}, tiene ${alcoholMasBarato.cantidad} unidades y es del fabricante ${alcoholMasBarato.fabricante}.`);
console.log(`El tipo con más unidades es ${tipoMasUnidades}, con un promedio de ${cantidadMasAlta / 5} unidades por compra.`);
console.log(`Hay un total de ${totalJabones} unidades de jabones.`);
}
