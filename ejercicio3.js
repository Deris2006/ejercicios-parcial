const asistente = {
    nombre: "María López",
    edad: 19,
    email: "maria.lopez@correo.com",
    telefono: "7730-5522",
    confirmado: true,
    id: "AS-2025-002"
};

// Se registra de qué centro educativo proviene
asistente.institucion = "Centro Tecnológico Global";

// Si es menor de edad, se desactiva la confirmación automáticamente
if (asistente.edad < 18) {
    asistente.confirmado = false;
}

// Si el correo no finaliza en ".com", se elimina la institución registrada
if (!asistente.email.endsWith(".com")) {
    delete asistente.institucion;
}

// Se imprime el nombre en minúsculas para validaciones internas
console.log(`Nombre (formato interno): ${asistente.nombre.toLowerCase()}`);

// Se transforma la edad a texto para ser usada en otros procesos
asistente.edad = asistente.edad.toString();

// Validación del formato del ID asignado
let idCorrecto = asistente.id.startsWith("AS-");

// Se define si la persona tiene autorización para ingresar
asistente.acceso = (parseInt(asistente.edad) >= 18) ? true : false;

// Se muestra el resultado final después de todos los ajustes
console.log(asistente);