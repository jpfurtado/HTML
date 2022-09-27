document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse script está sendo chamado no HEAD");
console.log("Primeiro");
console.log("Segundo");

// Comentário de uma linha
// CTRL + ;

/* 
Atalho para comentário de várias linhas
ALT + SHIT + A 
*/

// Tipagem fraca
var teste = 1;
console.log(typeof(teste));
document.write("<hr>O valor da variável teste é " + teste + "<hr>")
teste = 'joao'
console.log(typeof(teste));
document.write("<hr>O valor da variável teste agora é " + teste + "<hr>")
// Variável global - criada sem necessida de declaração 
nome = 'joao'
console.log(nome.toUpperCase())

// Formas de declaração de variáveis
var v1 = 5.25;
let v2 = null;
const v3 = 'teste';

console.log("Tipo da variavel v1:" + typeof(v1));
console.log("Tipo da variavel v2:" +typeof(v2));
console.log("Tipo da variavel v3:" +typeof(v3));
console.log("Tipo da NaN:" +typeof NaN);  // tipo number
console.log("Tipo do null:" +typeof null); // tipo number
console.log("Tipo da variavel +Infinity:" +typeof +Infinity); 
const numero = "1";
// Operadores de comparação
console.log("Testa se numero == 1:" + (numero == 1)); 
console.log("Testa se numero === 1:" + (numero === 1)); 

// Adicionar uma lista no body do HTML 
var lista = ['arroz', 'feijao', 'carne', 'macarrao'];
var listaUl = document.createElement('ul');

// Acessar elementos através do DOM
var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

document.write("<hr>Vamos criar uma lista agora!<hr>");
body[0].appendChild(listaUl);

for (var i=0;i<lista.length;i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}

document.write("<hr>A <b>LISTA ACIMA</b> foi criada dinamicamente via JS.");
