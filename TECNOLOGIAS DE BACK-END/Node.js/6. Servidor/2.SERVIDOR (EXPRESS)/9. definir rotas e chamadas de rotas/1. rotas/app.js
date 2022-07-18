//usado para chamar metodo express instalado. Para desenvolver o servidor 
const express = require('express');
//-----------------------------------------------------------------------
// usado para chamar o metodo do express body parser 
const bodyParser= require('body-parser');
//-----------------------------------------------------------------------

//utilizar o objeto express, no projeto chamando apenas uma constante que sera relacionada a todo o objeto express(assim chamando essa constante pode ser usado [app. Função do express desejada]) 
const app = express();


//pegar os dados em FORMULARIO que o usuario digito(para qualquer metodo http)
app.use(bodyParser.urlencoded());
//=================================================





// 1° ROTA:definir uma rota para uma requisição para ver um dado do servidor (ao digitar localhost:8080 vai mostra esse resultado)
app.get ("/", (req,res) =>{

   //vai mostra a resposta para essa requisição. mostrando o dado 
   res.send("resultado da requisição get com a rota / podendo ser uma pagina do site no lugar de um texto");
})
//-------------------------------------------------------------------------------------------------------------------------------



// 2° ROTA:definir a rota 2 para uma requisição para ver um dado do servidor (ao digitar localhost:8080/nomeDaRota vai mostra esse resultado)
app.get ("/nomeDaRota", (req,res) =>{

   // dados que esta nessa rota
   let alunos= [{id:0, nome:"jose"},{id:1, nome:"jose"},{id:3, nome:"jose"}];
   
   
   //vai mostra a resposta para essa requisição. mostrando o dado 
   res.json(JSON.stringify(alunos));
})
//-------------------------------------------------------------------------------------------------------------------------------





//====================================================================
//dados que essa requisição vai pegar (obs:para que qualquer requisição get consiga pegar esses dados deve ser colocado esses dados antes de todas as requisição get)
let pessoas=[{id:0, nome:"fabio"},
             {id:1, nome:"jose"},
             {id:2, nome:"maria"},
             {id:3, nome:"sandra"}];

// a rota abaixo ira pegar esses dados e espera o usuario digitar o id (um por vez) correspondente a um dos elementos acima. assim, sera retornado o nome

// 3° ROTA:definir a rota 3 para uma requisição para ver um dado do servidor (ao digitar localhost:8080/rotaParaTrazerUmDadoEspecifico vai mostra esse resultado)
app.get ("/rotaParaTrazerUmDadoEspecifico", (req,res) =>{
 
   
 let aluno= pessoas[req.body.id]//pegar todos os elementos do array  
 
 //mostra a resposta no formato json
 res.json(aluno);
})
//-------------------------------------------------------------------------------------------------------------------------------
//====================================================================






//ESTRUTURA: ESCUTAR AS REQUISIÇÕES (get,post,put,delet)---
app.listen(8080,()=>{

 console.log("servidor esperando as requisições")

})
//---------------------------------------------------------