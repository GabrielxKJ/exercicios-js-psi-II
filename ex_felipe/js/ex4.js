// 4. Construa um algoritmo que determine quanto será gasto para encher o tanque de um carro
// (VG), sabendo-se que o preço da gasolina é de R$ 1,80 e o preço do álcool é de R$ 1,00. O
// usuário fornecerá os seguintes dados: Tipo de carro (TC) (G – gasolina ou A – álcool) e
// Capacidade do tanque (CT), em litros.

const gasPrice = 1.80;
const alchoolPrice = 1.00;

let fuelType = prompt("Digite o tipo de combutível(EX: gasolina ou alcool)");
let tankCapacity = prompt("Digite a capacidade do tanque(litros)");

function howMuchSpendFullFuel(TC, CT) {
    if(TC === "alcool") {
			let custoAlcool = (alchoolPrice * CT).toFixed(2);
			window.alert(`Será gasto ${custoAlcool}$ em álcool para encher o tanque`);
			console.log(`Será gasto ${custoAlcool}$ em álcool para encher o tanque`);
    } else if (TC === "gasolina") {
			let custoGasolina = (gasPrice * CT).toFixed(2);
			window.alert(`Será gasto ${custoGasolina}$ em gasolina para encher o tanque`);
			console.log(`Será gasto ${custoGasolina}$ em gasolina para encher o tanque`);
    }
}

howMuchSpendFullFuel(fuelType, tankCapacity);