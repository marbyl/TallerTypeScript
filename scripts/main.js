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
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
//Se cambia esto para incluir una función anónima
// btnFiltro.onclick = filtrarPorNombre;
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    //La siguiente línea también se cambia para meterle el operador flecha
    // let cursosFiltrado: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text);});
    var cursosFiltrado = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrado);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
//Se cambia esto para incluir una función anónima
/* function filtrarPorNombre():void{
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrado: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text);});
    mostrarCursosAprendiz(cursosFiltrado);
}
 */
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
function mostrarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    var esatdo = cursos.map(function (c) { return (c.calificacion > 60) ? 'green' : 'red'; });
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trelement = document.createElement("tr");
        trelement.innerHTML = "<td>" + curso.nombre + "</td>\n        <td>" + curso.horas + "</td>\n        <td style=\"color:" + esatdo[index] + "\">" + curso.calificacion + "</td>\n        <td>" + curso.certificado + "</td>\n        <td>" + curso.anio + "</td>\n        ";
        cursosTbody.appendChild(trelement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);
}
