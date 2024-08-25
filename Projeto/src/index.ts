// Define as caracteristicas que um usuário deve ter 
interface Usuario {
    nome: string;
    idade: number;
    matricula: string;
}

// Cria uma variavel que recebe as informações que tem no elemento com id "form"
const form = document.getElementById('form') as HTMLFormElement;

// Cria um evento que quando o botao de entrar é clicado, cria um usuário no sistema com as informações informadas
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Cria um usuário com as informações que foram informadas no formulário
    const usuario: Usuario = {
        nome: (document.getElementById('nome') as HTMLInputElement).value,
        idade: parseInt((document.getElementById('idade') as HTMLInputElement).value),
        matricula: (document.getElementById('matricula') as HTMLInputElement).value
    };

    // Envia os dados para a página home
    const url = 'home.html';
    const params = `nome=${usuario.nome}&idade=${usuario.idade}&matricula=${usuario.matricula}`;
    window.location.href = `${url}?${params}`;
});
