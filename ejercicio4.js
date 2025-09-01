let pedido = {
    cliente: {
        nombre: "Fernando Rojas",
        codigoCliente: "USR-789"
    },
    carrito: {
        producto: "Mochila deportiva XL",
        precioUnitario: 95.00,
        cantidad: 2
    },
    cupon: "OFERTA2026",
    creadoEn: new Date()
};

// Normalizar el nombre del cliente en formato Title Case
pedido.cliente.nombre = pedido.cliente.nombre
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(" ");

// Obtener el año del pedido
let añoPedido = pedido.creadoEn.getFullYear();

// Convertir la fecha creadoEn a ISO
pedido.creadoEn = pedido.creadoEn.toISOString();

// Calcular subtotal y aplicar descuentos
let subtotal = pedido.carrito.precioUnitario * pedido.carrito.cantidad;

if (pedido.cupon.startsWith("OFERTA")) {
    subtotal *= 0.85;
}

if (pedido.carrito.cantidad >= 3 && subtotal > 100) {
    subtotal *= 0.95;
}

// Validar la información
if (!pedido.cliente.codigoCliente.startsWith("CL-")) {
    pedido.observacion = "Código de cliente inválido";
}

if (pedido.carrito.producto.length < 3) {
    pedido.carrito.producto = "PRODUCTO DESCONOCIDO";
}

if (!pedido.cupon) {
    delete pedido.cupon;
}

// Usar operadores ternarios
pedido.estadoPago = (subtotal >= 50) ? "APROBADO" : "RECHAZADO";
pedido.etiquetaEnvio = (subtotal > 120 || pedido.carrito.cantidad >= 5) ? "ENVÍO PRIORITARIO" : "ENVÍO ESTÁNDAR";

//  Mostrar en consola
console.log("=== RESUMEN DEL PEDIDO ===");
console.log(`Nombre del cliente: ${pedido.cliente.nombre}`);
console.log(`Año del pedido: ${añoPedido}`);
console.log(`Fecha (ISO): ${pedido.creadoEn}`);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Estado de pago: ${pedido.estadoPago}`);
console.log(`Etiqueta de envío: ${pedido.etiquetaEnvio}`);
console.log("Objeto final:", pedido);
