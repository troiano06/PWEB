//Criar Objeto Aluno1

//Primeira Forma
function Aluno1(primeiroNome, ultimoNome, RA, genero, idade) {
  this.nome = {
    primeiroNome,
    ultimoNome,
  };

  this.idade = idade;
  this.RA = RA;
  this.genero = genero;
}

var aluno = new Aluno1("João", "Silva", "0030481813000", "M", 20);


//Segunda Forma
var aluno1 = new Object();
aluno1.RA = "0030481813000";
aluno1.nome = {
    primeiroNome: "João",
    ultimoNome: "Silva"
}
aluno1.idade = 20;
aluno1.genero = "M";


//Terceira Form
var _aluno1 = {};
aluno1.RA = "0030481813000";
aluno1.nome = {
    primeiroNome = "João",
    ultimoNome = "Silva"
}
aluno1.idade = 19;
aluno1.genero = "M";