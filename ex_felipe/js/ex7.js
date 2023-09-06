let ValorDeVenda = parseInt(prompt("digite o seu valor de venda no mês"));
let NomeVendedor = prompt("digite seu nome");

function presentation(vm, nv) {
    if(vm >= 1000 && vm <= 5000) {
        window.alert(`parabéns ${nv} você atingiu a meta de vendas do mês`);
        console.log(`parabéns ${nv} você atingiu a meta de vendas do mês`)
    } else {
        window.alert(`Não batemos a meta do mês precisamos entender o motivo disso`)
    }
}

presentation(ValorDeVenda, NomeVendedor)