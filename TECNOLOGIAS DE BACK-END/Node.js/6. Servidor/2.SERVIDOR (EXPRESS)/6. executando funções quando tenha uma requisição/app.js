//usado para chamar metodo express instalado. Para desenvolver o servidor 
const express = require('express');
//-----------------------------------------------------------------------
//utilizar o objeto express, no projeto chamando apenas uma constante que sera relacionada a todo o objeto express(assim chamando essa constante pode ser usado [app. Função do express desejada]) 
const app = express();



// 2° PARTE: função que sera executada antes das resposta da requisição post 
let funcaoAntesRequisicao = (req, res, next)=>{
   console.log("foi executado essa função antes de executar a função principal que o metodo post ia chamar");
   next()
}
//--------------------------------------------------------------------------

// 1° PARTE: função executada quando o metodo get for requisitado-
let hello = (req,res)=>{
   res.send("foi executado a função essa função quando o metodo get foi usado");
}
//----------------------------------------------------------------






// 1.1 PARTE:respostas para as requisição get
app.get("/",hello);

//2.1 PARTE: respostas para as requisição post
app.post("/",funcaoAntesRequisicao); //app.post("/",funcaoAntesRequisicao, colocar a função que sera executada depois de executar a função ao lado);





//ESTRUTURA: ESCUTAR AS REQUISIÇÕES (get,post,put,delet)---
app.listen(8080,()=>{

 console.log("servidor esperando as requisições")

})
//---------------------------------------------------------