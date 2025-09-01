const nombreCompleto = "Ana Lucia Rodriguez"
const edad = 28
const salarioBase = 1000
let esActivo = true
let departamento = null

//Cree un objeto llamado empleado con las siguientes propiedades
const empleado = {
    nombre: nombreCompleto,
    edad: edad,
    salario: salarioBase,
    activo: esActivo,
    fechaIngreso: new Date(),
    habilidades: ["Excel", "Power PI", "Analisis"]
}

// Agregue la propiedad departamento con valor "contabilidad"
empleado.departamento = "contabilidad";

// Modifique el salario aumentandolo en 15%
empleado.salario = empleado.salario * 1.15;

// Elmine la propiedad activo
delete empleado.activo;

// Mostrar información en la consola
console.log("=== FICHA DE EMPLEADO ===")
console.log(`Nombre: ${empleado.nombre.toUpperCase()}`)
console.log(`Salario: $${empleado.salario.toFixed(2)}`)
console.log(`Departamento: ${empleado.departamento.toLowerCase()}`)
console.log(`Año de ingreso: ${empleado.fechaIngreso.getFullYear()}`)
console.log(`Habilidades (${empleado.habilidades.length}): ${empleado.habilidades.join(", ")}`)