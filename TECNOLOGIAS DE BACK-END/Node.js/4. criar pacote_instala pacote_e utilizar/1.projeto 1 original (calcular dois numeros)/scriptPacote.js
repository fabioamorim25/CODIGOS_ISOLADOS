//[arquivo principal. onde sera recebido todos os valores. depois ele ira fazer uma requisição para a função correspondente e fica esperando a resposta]



//responsavel por dizer para qual arquivo sera feito a requisição
const metodoCalculadora = require("./modulo");


// responsavel por pegar os argumentos digitados apartir do segundo argumento. onde sera utilizado os valores para funcionar o sistema 
let argumentos = process.argv.slice(2);


//----------------------------------------------
let a =Number(argumentos [1]);
let b =Number(argumentos [2]);
let c = "";

//-(argumento da posição 0)---------
if (argumentos[0]=='soma'){
    c = metodoCalculadora.soma(a,b);
}else if(argumentos[0] == 'mult'){
c = metodoCalculadora.multiplicacao(a,b);    
}
//---------------------------------------------


//mostra o resultado
console.log(c);

