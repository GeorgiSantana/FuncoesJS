const notas = [10, 8, 7.5, 4, 10]

//O metodo pop por padrão sempre revome o ultimo elemento da array, sendo assim ele não aceita parâmetro.
notas.pop()
console.log (notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/
notas.length
if (media >= 7) {
   console.log("Aluno aprovado!")
} else {
    console.log("Aluno reprovado.")
}
console.log (`A média do aluno foi:  ${media}`)