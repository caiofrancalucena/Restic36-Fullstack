"use strict";
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = {
        nome: document.getElementById('nome').value,
        idade: parseInt(document.getElementById('idade').value),
        matricula: document.getElementById('matricula').value
    };
    // Envia os dados para a página de resultado
    const url = 'home.html';
    const params = `nome=${usuario.nome}&idade=${usuario.idade}&matricula=${usuario.matricula}`;
    window.location.href = `${url}?${params}`;
});
