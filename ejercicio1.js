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


console.log(`=== FICHA DE EMPLEADO ===)
Nombre: ${empleado.nombre.toUpperCase()}
Edad: ${empleado.edad} años
Salario: $${empleado.salario.toFixed(2)}
Departamento: ${empleado.departamento.toLowerCase()}
Año de ingreso: ${empleado.fechaIngreso.getFullYear()}
Habilidades (${empleado.habilidades.length}): ${empleado.habilidades.join(', ')}`);
