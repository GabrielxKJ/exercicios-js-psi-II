// 6. Construa um algoritmo que leia o preço de um produto (P) e apresente a mensagem: “Em
// promoção”, caso o preço seja maior ou igual a R$ 50,00 e menor ou igual a R$ 100,00.
// Caso contrário, deve apresentar a mensagem: “Preço Normal”.

let precoProduto = parseFloat(prompt('Digite o preço do produto'));

function promotion(p) {
    if(precoProduto >= 50.00 && precoProduto <= 100.00) {
        window.alert('Em promocao');
        console.log('Em promocao');
    } else {
        window.alert('preco normal');
        console.log('preco normal');
    }
}

promotion(precoProduto);