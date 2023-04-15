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

console.log("******************************************************")




/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/



pessoa.apresentacao = function() {

  let sexo = "o";
  let idade = "anos";
  let quantidadeMetrosCaminhada = "metros";

  if(pessoa.sexo === "Feminino") {
   sexo = "a";
  }

  if(pessoa.idade === 1) {
    idade = "ano";
  }

  if(pessoa.caminhouQuantosMetros === 1) {
    quantidadeMetrosCaminhada = "metro";
  }

  return `Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobreNome}, tenho ${pessoa.idade} ${idade}, ${pessoa.altura} altura, meu peso é ${pessoa.peso}kg e só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${quantidadeMetrosCaminhada}"!´`
}

