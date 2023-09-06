// 5. Construa um algoritmo que leia um número inteiro (positivo ou negativo) e apresente o seu
// módulo (número sem sinal).

let intNumber = parseInt(prompt("digite um número inteiro"));

function módulo(intNumber) {
    if( intNumber < 0){
        let converted = -(intNumber)
        console.log(converted);
        window.alert(`o módulo de ${intNumber} é ${converted}`);
        console.log(`o módulo de ${intNumber} é ${converted}`);
    }
    else {
        window.alert(`o módulo de ${intNumber} é ${intNumber}`);
        console.log(`o módulo de ${intNumber} é ${intNumber}`)
    }
}


módulo(intNumber);

