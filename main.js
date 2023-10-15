var alumnos = [
    { nombre: "Juan", apellidos: "Pérez", notas: [85, 90, 78, 92, 88] },
    { nombre: "María", apellidos: "González", notas: [75, 80, 88, 95, 90] },
    { nombre: "Carlos", apellidos: "López", notas: [92, 88, 76, 85, 90] }
];

function calcularPromedio(notas) {
    var suma = notas.reduce(function (a, b) {
        return a + b;
    }, 0);
    return suma / notas.length;
}

function calcularNotaFinal(promedio) {
    if (promedio >= 90) {
        return "A";
    } else if (promedio >= 80) {
        return "B";
    } else if (promedio >= 70) {
        return "C";
    } else if (promedio >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function calcularNotasAlumno(alumno) {
    var promedio = calcularPromedio(alumno.notas);
    var notaFinal = calcularNotaFinal(promedio);
    return {
        nombre: alumno.nombre,
        apellidos: alumno.apellidos,
        promedio: promedio,
        notaFinal: notaFinal
    };
}

var promedioMinimo = 85;
var alumnosConBuenaNota = alumnos.filter(function (alumno) {
    return calcularPromedio(alumno.notas) >= promedioMinimo;
});

alumnosConBuenaNota.forEach(function (alumno) {
    var resultado = calcularNotasAlumno(alumno);
    console.log("Nombre: " + resultado.nombre + " " + resultado.apellidos);
    console.log("Promedio: " + resultado.promedio);
    console.log("Nota final: " + resultado.notaFinal);
    console.log("\n");
});

