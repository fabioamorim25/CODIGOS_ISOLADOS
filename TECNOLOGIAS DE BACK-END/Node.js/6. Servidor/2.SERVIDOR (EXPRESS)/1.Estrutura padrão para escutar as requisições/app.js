//-----------------------------------------------------------------------
//usado para chamar metodo express instalado. Para desenvolver o servidor 
const express = require('express');
// usado para ajudar a montar o caminho dos arquivos
const path= require('path');
//-----------------------------------------------------------------------

//utilizar o objeto express, no projeto chamando apenas uma constante que sera relacionada a todo o objeto express(assim chamando essa constante pode ser usado [app. Função do express desejada]) 
const app = express();



//ESTRUTURA: ESCUTAR AS REQUISIÇÕES (get,post,put,delet)==============
app.listen(5000,()=>{

console.log("escutando as requisições");

})
//===================================================================