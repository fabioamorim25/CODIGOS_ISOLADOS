const PORT= 3000;
const express= require('express');
const app= express();
const mongoose = require('mongoose');



//1° METODO: conexão entre o node e o mongo--------------------
mongoose.connect('mongodb://localhost/projetoTeste',(error,db)=>{
   
    console.log("acessando banco de dados");

})
//---------------------------------------------------------------


//2° METODO: conexão entre o node e o mongo--------------------
mongoose.connect('mongodb://localhost/projetoTeste').then(db=>{

    console.log("acessando banco de dados");

}).catch(error =>{

    console.log(error)

})
//-------------------------------------------------------------


//3° METODO: conexão entre o node e o mongo------------------------------------------------------------------------
mongoose.connect('mongodb://localhost/projetoTeste', {useNewUrlParser: true, useUnifiedTopology: true});

let db= mongoose.connection;

//======CRIAR EVENTOS QUE SERAM EXECUTADOS QUANDO ACONTECER ALGUMA COISA=============================
//EX: evento para quando houver erro. assim sera executado uma função=================== 
db.on("error", ()=>{ //onde o [on] e executado quando houver algo uma varias vezes. aqui foi usado para o evento de erro
    console.log(error)
})
//======================================================================================

//EX: evento para quando o banco de dados for carregado. sera executado uma função=======
db.once("open", ()=>{//onde o [once] e executado quando acontecer algo uma vezes. aqui foi usado para o evento para quando o banco de dados for carregado
    console.log("banco de dados carregado")
}) 
//===================================================================================================
//------------------------------------------------------------------------------------------------------------------




app.listen(PORT, (req,res)=>{
    console.log("servidor esperando requisições");
})