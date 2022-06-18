//= PARTE 1: receber a função soma que esta no arquivo modo.js==
let soma = require("./modo");
//==============================================================





//--------------------------------------
let argumentos = process.argv.slice(2);

let a = Number(argumentos[0]);
let b = Number(argumentos[1]);

let c= soma(a,b); 

console.log(c);
//------------------------------------