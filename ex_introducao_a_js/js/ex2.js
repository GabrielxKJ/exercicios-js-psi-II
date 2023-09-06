// 2. Construa um algoritmo que leia o valor de uma conta de luz (CL) e, caso o valor seja maior
// que R$ 50,00 apresente a mensagem: “Você está gastando muito”. Caso contrário exiba a
// mensagem: “Seu gasto foi normal”.

let cl = parseFloat(prompt('digite o valor da conta de luz'));

function calcLul(CL) {
	let value = parseFloat(CL).toFixed(2);
	console.log(value);
  // let valorConta = formatMoneyBR(parseFloat(CL));
	// console.log(valorConta)
  if(value > 50.00) {
		window.alert("você está gastando muito");
    console.log("você está gastando muito");
  } else if(value >= 0 && value <= 50 ) {
		window.alert("seu gasto foi normal");
    console.log("seu gasto foi normal");
  } else if(value < 0 || typeof value === 'string'){
		window.alert("Faz o bglh direiro man");
	}

}

calcLul(cl);