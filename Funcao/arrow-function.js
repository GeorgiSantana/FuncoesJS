//const apresentaArrow = nome => `Meu nome é ${nome}`;
//const soma = (num1, num2) => num1 + num2;

//Arrow com mais de um alinha de instruções

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10 ) {
        return "Somento numeros de 1 a 9"
        
    } else {
        return num1 + num2;
       
    }

}
console.log (somaNumerosPequenos(11, 8))