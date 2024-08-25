// Define quais são as informações que um usuário deve ter, assim como na pagina inicial
interface Usuario {
    nome: string;
    idade: number;
    matricula: string;
}

// Recebe as infomações que foram passadas na tela anterior
const urlParams = new URLSearchParams(window.location.search);

// Cria um usuário  com as informações que foram passadas
const usuario: Usuario = {
    nome: urlParams.get('nome')!,
    idade: parseInt(urlParams.get('idade')!),
    matricula: urlParams.get('matricula')!
};

// Cria uma estrutura na qual os dados seram exibidos na tela do usuário 
const resultadoElement = document.createElement('div');
resultadoElement.innerHTML = `
    <div id="dados">
    <h2>Nome: ${usuario.nome}</h2>
    <h2>Idade: ${usuario.idade} anos</h2>
    <h2>Matrícula: ${usuario.matricula}</h2>
    </div>
`;

// Exibe na tela os dados do usuário que foram coletados 
document.body.appendChild(resultadoElement);