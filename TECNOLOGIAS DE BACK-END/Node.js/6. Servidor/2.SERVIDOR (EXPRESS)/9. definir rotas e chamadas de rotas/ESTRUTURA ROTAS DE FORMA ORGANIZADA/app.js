//usado para chamar metodo express instalado. Para desenvolver o servidor 
const express = require('express');
//-----------------------------------------------------------------------
// usado para chamar o metodo do express body parser 
const bodyParser= require('body-parser');
//-----------------------------------------------------------------------
//pegar os dados que estão no arquivo alunos que esta na pasta routes
const alunos= require('./routes/alunos');
//-------------------------------------------------------------------

//utilizar o objeto express, no projeto chamando apenas uma constante que sera relacionada a todo o objeto express(assim chamando essa constante pode ser usado [app. Função do express desejada]) 
const app = express();



//chamar os dados da pasta routes
app.use("/api",alunos);




//ROTA PADRÃO: para uma requisição para ver um dado do servidor 
app.get ("/", (req,res) =>{

   //resultado de uma pagina inicial 
   res.send("resultado da requisição get com a rota /");
})
//-------------------------------------------------------------









//ESTRUTURA: ESCUTAR AS REQUISIÇÕES (get,post,put,delet)---
app.listen(8080,()=>{

 console.log("servidor esperando as requisições")

})
//---------------------------------------------------------