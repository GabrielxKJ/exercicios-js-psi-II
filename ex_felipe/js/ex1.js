// 1. Construa um algoritmo que leia o valor de uma conta de luz (CL) e, caso o valor seja maior
// que R$ 50,00 apresente a mensagem: “Você está gastando muito”. Caso contrário não
// exiba mensagem nenhuma.


let cl = parseFloat(prompt('digite o valor da conta de luz'))


function calcLul(CL) {
	let value = parseFloat(CL).toFixed(2);
	console.log(value);
  // let valorConta = formatMoneyBR(parseFloat(CL));
	// console.log(valorConta)
  if(value > 50.00) {
		window.alert("você está gastando muito")
    console.log("você está gastando muito")
  }
}

calcLul(cl);

// function formatMoneyBR(value, currency = "BRL") {
// 		return new Intl.NumberFormat('pt-BR', {style: 'currency', currency}).format(value);
// }

// const amount = 50.00
// const formattedAMount = formatMoneyBR(amount)
