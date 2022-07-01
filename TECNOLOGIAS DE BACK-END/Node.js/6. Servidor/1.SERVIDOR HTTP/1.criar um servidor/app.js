// CRIANDO UM SERVIDOR "usando o modulo HTTP do node.js"

// chamar o modulo http------
const http = require('http');
//---------------------------



// criar o servidor (usadando o metodo .createServer)--
http.createServer((request , Response)=>{
 
    //trabalhando com o servidor--- 


    //-----------------------------
})
//-----------------------------------------------------


// definindo a porta que sera responsavel por espera uma requisição ao servidor (OBS: existe varias portas "8080 é a padrão", 3000). E caso tenha um erro ao criar o servidor sera mostrado qual o erro
.listen(3000, (error)=>{

   
    if(error){
        console.log(error);
    }else{
        console.log("servidor rodando na porta 3000");
    }


})
