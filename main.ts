import {Aprendiz, NivelEducativo}  from './aprendiz.js';
import {Curso} from './curso.js'

let cursos = [new Curso("Práctivas esenciales para el agilismo", 20, 90, true, 2019),
new Curso("Ingeniería de sofware", 10, 99, true, 2019),
new Curso("Pruebas automatizadas", 25, 50, false, 2019),
new Curso("Principios de diseño y arquitectura", 25, 75, true, 2029)
]

export const ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTables: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

//Se cambia esto para incluir una función anónima
// btnFiltro.onclick = filtrarPorNombre;
btnFiltro.onclick = () => {
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    //La siguiente línea también se cambia para meterle el operador flecha
    // let cursosFiltrado: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text);});
    let cursosFiltrado: Curso[] = ap.cursos.filter(c => c.nombre.match(text));
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
function mostrarDatosAprendiz(aprendiz: Aprendiz):void{
    // donde estará el cuerpo de la tabla aprendiz
    let tbodyAprendiz = document.createElement("tbody");
    // crear el html interno. para reemplazar dinámicamente los valores que 
    //corresponden a los valores de los atributos
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height ="100"></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`
    //al body añardirle el objeto que acabbamos de rear
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz: Aprendiz):void{
    let numeroCertificados:number = aprendiz.darCursosCertificados();
    console.log(numeroCertificados);
    // donde estará el cuerpo de la tabla estadisticas
    let trelement = document.createElement("tbody");
    // crear el html interno. para reemplazar dinámicamente los valores que 
    //corresponden a los valores de los atributos
    //Las comillas inertidas se usan para poder reemplazar dinámicamente los valores.
    trelement.innerHTML = `<td><b>Cursos certificados</td><td>${numeroCertificados}</td>`;
    estadisticasTables.appendChild(trelement)
    
}

function mostrarCursosAprendiz(cursos: Curso[]): void{
    let cursosTbody: HTMLElement = document.createElement("tbody");
    let esatdo: string[] = cursos.map(c => (c.calificacion>60)?'green':'red');
    let index: number = 0;
    for(let curso of cursos)
    {
        let trelement: HTMLElement = document.createElement("tr");
        trelement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${esatdo[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>
        `;
        cursosTbody.appendChild(trelement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);

}