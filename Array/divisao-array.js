const nomes = ['George', 'Maria', 'Luisa', 'Priscila',]

//O método slice realiza a divisão.
const sala1 = nomes.slice (0, nomes.length/2)
const sala2 = nomes.slice (nomes.length/2)

console.log (`Os alunos da sala 1 são: ${sala1}`)
console.log (`Os alunos da sala 2 são: ${sala2}`)