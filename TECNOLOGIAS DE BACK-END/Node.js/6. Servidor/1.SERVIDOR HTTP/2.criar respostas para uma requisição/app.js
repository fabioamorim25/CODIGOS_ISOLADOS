// CRIANDO UM SERVIDOR "usando o modulo HTTP do node.js"

// chamar o modulo http------
const http = require('http');
//---------------------------



// criar o servidor (usadando o metodo .createServer)-------------------------------------------------------------------------------------------------------------------------------------------------
http.createServer((request , Response)=>{
 


    //trabalhando com a resposta do servidor====================================================
      Response.writeHead(200, {'Content-Type':'text/plain'}); //definir o numero da requisição (OBS: existe varias) e o tipo de conteudo sera mostrado (aqui foi para um conteudo de texto)
  
      Response.end("resposta do servidor:conteudo de texto a ser mostrado na tela quando"); // estrutura para a resposta que o servidor vai enviar (vai enviar um texto com o nome carregando) "COLOCAR O CONTEUDO A SER MOSTRADO"
    //==========================================================================================



})
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// definindo a porta que sera responsavel por espera uma requisição ao servidor (OBS: existe varias portas "8080 é a padrão", 3000). E caso tenha um erro ao criar o servidor sera mostrado qual o erro
.listen(3000, (error)=>{

   
    if(error){
        console.log(error);
    }else{
        console.log("servidor rodando na porta 3000");
    }


})