// 13. Construa um algoritmo que leia a quantidade de dinheiro existente no caixa de uma
// empresa (CAIXA), a quantidade de produtos a ser comprada (QTD) e o preço de cada
// unidade (PR). Caso o valor total da compra seja superior a 80% do valor em caixa, a
// compra deve ser feita a prazo (3x), com juros de 10% sobre o valor total. Caso contrário, a
// compra deverá ser realizada a vista, onde a empresa receberá 5% de desconto. Apresentar
// a forma de pagamento escolhida e o valor a ser pago (total a vista ou total a prazo),
// dependendo da escolha realizada pelo programa.



let input_caixa = prompt("Digite quantidade de dinheiro em caixa");
let input_produto = parseFloat(prompt("Digite quantidade de produtos a ser comprado"));
let input_preco = parseFloat(prompt("Digite o preço de cada unidade"));

const empresa = {
    caixa: input_caixa, // dinheiro disponível
    qtd_produtos: input_produto, // produtos a serem comprados
    preco_unidade: input_preco  // preco da unidade
}

function inCashOrInterm(empresa) {
    let percent = (80 * empresa.caixa)/100;
    let valor_compra = empresa.qtd_produtos * empresa.preco_unidade

    if( valor_compra > percent) {
				
        let valorDaCompraComJuros = ((10 * valor_compra)/100) + valor_compra
        let parcela = Math.round(valorDaCompraComJuros / 3);
        return ['prazo', parcela, valorDaCompraComJuros];
    } else {
				let valorDaCompraComDesconto = valor_compra - ((5 * valor_compra)/100);
				console.log(valorDaCompraComDesconto);
        return ['vista', desconto, valorDaCompraComDesconto];
    }
}

let valueInCashOrInTerm = inCashOrInterm(empresa);


switch (valueInCashOrInTerm[0]) {
	case 'prazo':
		window.alert(`a forma de pagamento é à ${valueInCashOrInTerm[0]}, será parcelado em 3x com juros de: ${valueInCashOrInTerm[1]} de um total de ${valueInCashOrInTerm[2]}`);
		break;

	case 'vista':
		window.alert(`a forma de pagamento é à ${valueInCashOrInTerm[0]}, obteve um desconto de(5%): ${valueInCashOrInTerm[1]} reais, o total a pagar é ${valueInCashOrInTerm[2]} reais`);
		break
}

