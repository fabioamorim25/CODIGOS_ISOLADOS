//usado para chamar metodo express instalado. Para desenvolver o servidor 
const express = require('express');
//-----------------------------------------------------------------------
// usado para chamar o metodo do express body parser 
const bodyParser= require('body-parser');
//-----------------------------------------------------------------------

//utilizar o objeto express, no projeto chamando apenas uma constante que sera relacionada a todo o objeto express(assim chamando essa constante pode ser usado [app. Função do express desejada]) 
const app = express();





// 1° PARTE: função executada quando o metodo get for requisitado-
let pegarDadosResebidos = (req,res, next)=>{
   console.log(req.body);

   next();
}
//----------------------------------------------------------------



// 1.1 PARTE:respostas para as requisição get
app.use("/",bodyParser.json());
app.post("/",pegarDadosResebidos);





//ESTRUTURA: ESCUTAR AS REQUISIÇÕES (get,post,put,delet)---
app.listen(5000,()=>{

 console.log("servidor esperando as requisições")

})
//---------------------------------------------------------