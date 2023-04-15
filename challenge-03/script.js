/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

let pessoa = {
  nome:"Jessé",
  sobreNome:"Silva",
  sexo:"Masculino",
  idade: 32,
  altura: 1.70,
  peso: 117,
  andando: Boolean = false,
  caminhouQuantosMetros: Number = 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = () => {
  return pessoa.idade++
}

console.log(pessoa.fazerAniversario())
console.log(pessoa.fazerAniversario())
console.log(pessoa.fazerAniversario())

console.log("******************************************************")

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = (metros) => {
    pessoa.caminhouQuantosMetros + metros;
    pessoa.andando = true;
}

console.log(pessoa)

console.log("******************************************************")


/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function() {
  pessoa.andando = false;
};

console.log("******************************************************")


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/


pessoa.nomeCompleto = function() {
  return `Olá Meu nome é ${pessoa.nome} ${pessoa.sobreNome}!`;
};

console.log(pessoa.nomeCompleto())

console.log("******************************************************")


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function() {
  return `Olá, eu tenho ${pessoa.idade} anos!`
};

console.log(pessoa.mostrarIdade());

console.log("******************************************************")


/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/


pessoa.mostrarPeso = function() {
  return `Eu peso ${pessoa.peso}kg!`;
};

console.log(pessoa.mostrarPeso());

