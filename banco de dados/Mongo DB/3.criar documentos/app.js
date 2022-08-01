const PORT= 3000;
const express= require('express');
const app= express();
const mongoose = require('mongoose');


//ESTRUTURAR UM MOLDE GENERICO DAS CARACTERISTICAS DO DOCUMENTO===================================
const moldeGenerico= new mongoose.Schema({
    // molde generico (contem as chaves e o tipo de formato que a chave vai receber)--
    title: String,
    description: String,
    url:String,
    click: Number

    //obrigar a colocação de um elemento: {type: formatoDoDado , required:true}
    //definir uma caracteristica: {type: formatoDoDado , default: valor}
    //--------------------------------------------------------------------------------
})

// dizer que vai criar uma coleção. onde todos os documentos dessa coleção seguem o moldeGenerico
const NomeColecao= mongoose.model('NomeColecao', moldeGenerico);


// informações que sera gravada na coleção
let nomeColecao= new NomeColecao({

    //objeto-------------------------------
    title: "documento teste",
    description: "teste de um documento",
    url: "https://instagram.com",
    click: 0
    //-------------------------------------
})

// salvar o documento no banco de dados-
nomeColecao.save().then(doc=>{
    console.log(doc) // caso de certo mostra o documento
}).catch(error=>{
    console.log(error) //caso de erro mostra o erro
})
//--------------------------------------

//==============================================================================================




//1° METODO: conexão entre o node e o mongo--------------------
mongoose.connect('mongodb://localhost/projetoTeste',(error,db)=>{
   
    console.log("acessando banco de dados");

})
//---------------------------------------------------------------



app.listen(PORT, (req,res)=>{
    console.log("servidor esperando requisições");
})