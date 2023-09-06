// 11. Construa um algoritmo que leia o código de um livro (CL) e apresente a categoria do livro,
// conforme a tabela abaixo:
// Código do Livro (CL)
// Categoria
// A Ficção
// B Não-Ficção


let codigo = prompt('digite um código(A ou B)');

switch (codigo) {
    case 'A':
        window.alert('livro de ficção')
        break;
    case 'B':
        window.alert('livro de não ficção');
    default:
        window.alert('código inválido');
        break;
}