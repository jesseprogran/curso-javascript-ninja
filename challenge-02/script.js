// /*
// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos;
// 2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
//     Preencha todos os valores corretamente!
// 3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
// */

// function multiplicacao(x, y, z) {
//   if(x === undefined || y === undefined || z === undefined) {
//     return `Preencha todos os valores corretamente`;
//   } else {
//     return (x * y * z) + 2;
//   }
// }

// console.log(multiplicacao
// (3, 5, 8)
// )



/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.

2. Se somente um argumento for passado, retorne o valor do argumento.

3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.

4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.

6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/


// function divisao(A, B, C) {
//   if(A !== undefined && B === undefined && C === undefined) {
//     return A;
//   } else if( A !== undefined && B !== undefined && C === undefined) {
//     return A + B;
//   } else if(A !== undefined && B !== undefined && C !== undefined) {
//     return (A + B) / C;
//   } else if(A === undefined && B === undefined && C === undefined) {
//     return false;
//   } else {
//     return null;
//   }
// }

// // Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.


// console.log(divisao(1,2,null))





let pessoa = {
  nome: "Jessé",
  idade: 31,
  altura: 1.70,
  peso: 115,
}


