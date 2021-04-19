import {Aprendiz, NivelEducativo}  from './aprendiz.js';
export const ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO);
let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
mostrarDatosAprendiz(ap);

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