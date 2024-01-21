
//cada posição é chamada de indice. Neste caso temos uma array com 4 elementos e seus indices vão do 0 ao 3.
const notas = [10, 6.5, 8, 7.5]
let media = (notas[0] + notas[1] + notas[2] + notas[3]) 
/ notas.length
//A palavra length ao comprimento da array. Ou seja, ela é a responsável por fazer a contagem de todos os elemntos.
console.log (media)
<<<<<<< HEAD
=======

//Array literal é simplesmente uma lista de elementos de array separados com virgulas dentro de colchetes.
//Os array literais podem conter objetos literais ou outros arrays literais.
var base = 1024;
var table =[base, base+1, base+2, base+3];
var misc = [1.1, true, "a",];
var b =[[1, {x:1, y:2}], [2,{x:3, y:4}]];

var count = [1,,3]; //Array com elementos nos indices 0 e 2. count 1 undefined
var undefs = [,,]; //Array sem elementos mas com comprimento 2

// Lendo e granvando elementos de array

var a = ["word"]; // Começa com o array de um elemento
var value =a[0]; // lê o elemento


console.log(base)
console.log(table.length)
console.log(misc)
console.log(b.length)
console.log(count)
console.log(undefs.length)
console.log(value)
console.log(a)
>>>>>>> 1b407f591ce1bc7320fe6e842b9a9caafa80fe61
