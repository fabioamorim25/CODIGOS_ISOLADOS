//= PARTE 1: receber a função soma que esta no arquivo modo.js==
let calculadora = require("./scriptSecundario");
//==============================================================





//--------------------------------------
let argumentos = process.argv.slice(2);

let a = Number(argumentos[0]);
let b = Number(argumentos[1]);


//PARTE 3:executar uma função que esta no JS secundario [nomeDoObjeto.funçãoAserExecutada (valor1 , valor2)]
let c= calculadora.soma(a,b); 

console.log(c);
//------------------------------------

