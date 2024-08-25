"use strict";
const urlParams = new URLSearchParams(window.location.search);
const usuario = {
    nome: urlParams.get('nome'),
    idade: parseInt(urlParams.get('idade')),
    matricula: urlParams.get('matricula')
};
const resultadoElement = document.createElement('div');
resultadoElement.innerHTML = `
    <div id="dados">
    <h2>Nome: ${usuario.nome}</h2>
    <h2>Idade: ${usuario.idade} anos</h2>
    <h2>Matrícula: ${usuario.matricula}</h2>
    </div>
`;
document.body.appendChild(resultadoElement);
