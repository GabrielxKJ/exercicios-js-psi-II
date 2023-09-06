// 12. Construa um algoritmo que receba a leitura do termômetro (T). Caso a temperatura esteja
// abaixo de 100ºC, apresentar a mensagem de que a temperatura está muito baixa. Caso a
// temperatura esteja entre 100ºC e 200ºC (inclusive), apresentar a mensagem de que a
// temperatura está baixa. Caso a temperatura esteja acima de 200ºC e inferior a 500ºC,
// apresentar a mensagem de que a temperatura está normal. Caso contrário, apresentar a
// mensagem de que a temperatura está muito alta.

let temp = parseFloat(prompt("digite a temperatura"));

function alertTemp(T) {
	if(T < 100) {
		window.alert("A temperatura está muito baixa");
	} else if(T >= 100 && T <= 200) {
		window.alert("A temperatura está baixa");
	} else if(T > 200 && T < 500) {
		window.alert("A temperatura está normal");
	} else {
		window.alert("a temperatura está muito alta");
	}
}

alertTemp(temp);