import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Práctivas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingeniería de sofware", 10, 99, true, 2019),
    new Curso("Pruebas automatizadas", 25, 50, false, 2019),
    new Curso("Principios de diseño y arquitectura", 25, 75, true, 2029)
];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTables = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    // donde estará el cuerpo de la tabla aprendiz
    var tbodyAprendiz = document.createElement("tbody");
    // crear el html interno. para reemplazar dinámicamente los valores que 
    //corresponden a los valores de los atributos
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height =\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></tr>";
    //al body añardirle el objeto que acabbamos de rear
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    console.log(numeroCertificados);
    // donde estará el cuerpo de la tabla estadisticas
    var trelement = document.createElement("tbody");
    // crear el html interno. para reemplazar dinámicamente los valores que 
    //corresponden a los valores de los atributos
    //Las comillas inertidas se usan para poder reemplazar dinámicamente los valores.
    trelement.innerHTML = "<td><b>Cursos certificados</td><td>" + numeroCertificados + "</td>";
    estadisticasTables.appendChild(trelement);
}
function mostrarCursosAprendiz(aprendiz) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trelement = document.createElement("tr");
        trelement.innerHTML = "<td>" + curso.nombre + "</td>\n        <td>" + curso.horas + "</td>\n        <td>" + curso.calificacion + "</td>\n        <td>" + curso.certificado + "</td>\n        <td>" + curso.anio + "</td>\n        ";
        cursosTbody.appendChild(trelement);
    }
    cursosTable.appendChild(cursosTbody);
}
