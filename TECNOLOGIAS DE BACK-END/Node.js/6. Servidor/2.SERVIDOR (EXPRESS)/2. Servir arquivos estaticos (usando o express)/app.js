//-----------------------------------------------------------------------
//usado para chamar metodo express instalado. Para desenvolver o servidor 
const express = require('express');
// usado para ajudar a montar o caminho dos arquivos
const path= require('path');
//-----------------------------------------------------------------------
//utilizar o objeto express, no projeto chamando apenas uma constante que sera relacionada a todo o objeto express(assim chamando essa constante pode ser usado [app. Função do express desejada]) 
const app = express();






// ROTA: para a pasta do cliente--------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'cliente')));

//Usando o metodo .use(  )
//para servir arquivos estaticos usa-se   [Express.static (colocar onde esta os arquivo estaticos)]
//para mostra o caminho onde esta os arquivos   [Path.join (__dirname , 'nome da pasta onde ta os arquivos')] 
//--------------------------------------------------------------------------------------------------------------




//ESTRUTURA: ESCUTAR AS REQUISIÇÕES (get,post,put,delet)==============
app.listen(5000,(req,res)=>{

 console.log("servidor esperando as requisições")

})
//===================================================================