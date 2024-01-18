/*function soma(num1, num2) {
    return num1 + num2;
}

console.log (soma(40, 5))
console.log (soma(-2, 5))
console.log (soma(100, 5))*/

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log (nomeIdade('George', 35))

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1, num2) {
    return num1 * num2;
}

console.log ("O resultado da multiplicação é: " + multiplica (soma (4, 5), soma(3, 3)))

//function multiplica(num1 = 1, num2 = 1) {
//    return num1 + num2;
//}
//console.log ("O resultado da multiplicação é: " + multiplica (soma (4, 5)))

/*Quando passado apenas um parametro para evitar o erro de NAN, atribuir um numero que não seja zero
aos parametros da multiplicacao. Assim ele toma o lugar do padrão.*/

