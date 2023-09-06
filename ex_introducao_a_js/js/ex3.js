// 3. Construa um algoritmo que, tendo como dados de entrada a altura (H) e o sexo (S) de
// uma pessoa calcule e apresente seu peso ideal utilizando as seguintes fórmulas:

// Para homens: Peso ideal (P) = (72,7 * H) – 58
// Para mulheres: Peso ideal (P) = (62,1 * H) – 44,7


let altura = prompt("Digite sua altura");
let sexo = prompt(
	"Para calcular seu peso ideal, digite seu sexo biológico(EX:homem ou mulher)"
).toLowerCase();

function convertToDot(string) {
	const stringWithPoint = string.replace(',','.');
	altura = parseFloat(stringWithPoint).toFixed(2);
}

function calcIdealWeight(H, S) {
	if(S === "homem") {
		let weightM = ((72.7 * H) - 58).toFixed(2);
		window.alert(`seu peso é ${weightM}`);
		console.log(`seu peso é ${weightM}`)
	}
	else if(S === "mulher") {
		let weightF = ((62.1 * H) - 44.7).toFixed(2);
		window.alert(`seu peso ideal é ${weightF} KG`);
		console.log(`seu peso ideal é ${weightF} KG`)
	}
}


convertToDot(altura);
console.log(altura);