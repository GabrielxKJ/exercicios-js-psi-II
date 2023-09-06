// 9. Construa um algoritmo que calcule o novo salário (SAL_NOVO) de um funcionário.
// Considere que o funcionário deverá receber um reajuste de 15% caso seu salário (SAL) seja
// menor que 500. Se o salário for maior ou igual a 500, mas menor ou igual a 1000, o
// reajuste deve ser de 10%. Caso o salário seja maior que 1000, o reajuste deve ser de 5%.

let salFuncionario = parseFloat(prompt("Digite seu salário"));

function reajusteSal(salF) {
    if(salF < 500) {
        let novoSalario = ((15 * salF)/100) + salF
        window.alert(`seu salário teve um aumento de 15% foi reajustado para ${novoSalario}`)
        console.log(`seu salário teve um aumento de 15% foi reajustado para ${novoSalario}`)
    } else if(salF >= 500 && salF <= 1000) {
        let novoSalario = ((10 * salF)/100) + salF
        window.alert(`seu salário teve um aumento de 10% foi reajustado para ${novoSalario}`)
        console.log(`seu salário teve um aumento de 10% foi reajustado para ${novoSalario}`);
    } else {
        window.alert("seu salário não precisa de aumento, você ganha o suficiente!");
        console.log("seu salário não precisa de aumento, você ganha o suficiente!");
    }
}

reajusteSal(salFuncionario);