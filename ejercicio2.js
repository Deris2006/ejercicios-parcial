const nombreCliente = "Carlos Pérez"
const producto = "Chocolate"
const precioUnidad = 2.5
let cantidad = 4
let cupon = "SWEET10"

// Calcular subtotal
let subtotal = precioUnidad * cantidad;

// Aplicar descuento con operador ternario
let descuento = cupon.startsWith("SWEET") ? subtotal * 0.10 : 0;

// Operador de asignación (demostración)
descuento += 0; 

// Calcular total
let total = subtotal - descuento;

// Evaluar tipo de compra
let tipoCompra = (cantidad > 3 && subtotal >= 10) ? "Compra grande" : "Compra regular";

// Mostrar todos los resultados
console.log("=== RESUMEN DE COMPRA ===");
console.log(`Cliente: ${nombreCliente.toUpperCase()}`);
console.log(`Producto: ${producto} (${producto.length} caracteres)`);
console.log(`Cantidad: ${cantidad}`);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Descuento: $${descuento.toFixed(2)}`);
console.log(`Total a pagar: $${total.toFixed(2)}`);
console.log(`Tipo de compra: ${tipoCompra}`);

