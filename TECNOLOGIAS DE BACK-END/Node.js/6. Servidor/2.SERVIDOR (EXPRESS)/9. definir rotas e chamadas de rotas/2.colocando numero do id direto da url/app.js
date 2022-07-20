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



//====================================================================
//dados que a requisição get vai usar (pode ser usado paginas para ser chamadas quando o usuario digitar o id de cada pagina)
let pessoas=[{id:0, nome:"fabio"},
             {id:1, nome:"jose"},
             {id:2, nome:"maria"},
             {id:3, nome:"sandra"}];
//====================================================================



// a rota abaixo ira pegar esses dados e espera o usuario digitar o id (um por vez) correspondente a um dos elementos acima. assim, sera retornado o nome

//ROTA: para uma requisição para ver um dado do servidor (ao digitar localhost:8080/rota e o id do dado junto com a url "/id da pagina" sera mostrado o resultado)
app.get ("/rota/:id", (req,res) =>{
 
   
   let aluno= pessoas[req.params.id]//pegar todos os elementos do array  
   
   //mostra a resposta no formato json
   res.json(aluno);
  })
  //-------------------------------------------------------------------------------------------------------------------------------







//ESTRUTURA: ESCUTAR AS REQUISIÇÕES (get,post,put,delet)---
app.listen(8080,()=>{

 console.log("servidor esperando as requisições")

})
//---------------------------------------------------------