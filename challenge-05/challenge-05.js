/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let array = ["Jessé", 32, null, 34, undefined];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction2(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myArray2 = ["DAVI", true, null, "felipe", 23];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myArray2, 0));
console.log(myFunction2(myArray2, 1));
console.log(myFunction2(myArray2, 2));
console.log(myFunction2(myArray2, 3));
console.log(myFunction2(myArray2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

// function book(bookName) {
//   if (bookName === undefined) {
//     let myEbook = {
//       codigoLimpo: {
//         quantidadeDePaginas: 300,
//         autor: "Davi Silva",
//         editora: "pay livro",
//       },
//       mobyDick: {
//         quantidadeDePaginas: 280,
//         autor: "Herman Melville",
//         editora: "Dick",
//       },
//       grandesEsperacas: {
//         quantidadeDePaginas: 400,
//         autor: "Charles Dickens",
//         editora: "TJT",
//       },
//     };
//     return myEbook;
//   } else {
//     return myEbook[bookName];
//   }
// }

function book(bookName) {
  let myEbook = {
    "Código Limpo": {
      quantidadeDePaginas: 300,
      autor: "Davi Silva",
      editora: "pay livro",
    },
    "Moby Dick": {
      quantidadeDePaginas: 280,
      autor: "Herman Melville",
      editora: "Dick",
    },
    "Grandes Esperanças": {
      quantidadeDePaginas: 400,
      autor: "Charles Dickens",
      editora: "TJT",
    },
  };

  return !bookName ? myEbook : myEbook[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

let bookName = 'Código Limpo';
console.log(
  `o livro ${bookName} tem ${
    book(bookName).quantidadeDePaginas
  } páginas!`
); //o livro codigoLimpo tem 300 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`); // O autor do livro Código Limpo é Davi Silva.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro ${bookName} foi publicado pela editora ${
    book(bookName).editora
  }.`
); //O livro Código Limpo foi publicado pela editora pay livro.
