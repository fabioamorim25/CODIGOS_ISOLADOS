const PORT= 3000;
const express= require('express');
const app= express();
const mongoose = require('mongoose');

//3° METODO: conexão entre o node e o mongo--------------------
mongoose.connect('mongodb://localhost/projetoTeste', {useNewUrlParser: true, useUnifiedTopology: true})





//ESTRUTURAR UM MOLDE GENERICO DAS CARACTERISTICAS DO DOCUMENTO===================================
const moldeGenerico= new mongoose.Schema({
    // molde generico (contem as chaves e o tipo de formato que a chave vai receber)--
    title: String,
    description: String,
    url:String,
    click: Number

    //obricar a colocação de um elemento: {type: formatoDoDado , required:true}
    //definir uma caracteristica: {type: formatoDoDado , default: valor}
    //--------------------------------------------------------------------------------
})
// dizer que vai criar uma coleção. onde todos os documentos dessa coleção seguem o moldeGenerico
const NomeColecao= mongoose.model('NomeColecao', moldeGenerico);
//=================================================================================================












//3° METODO. CONTINUAÇÃO: conexão entre o node e o mongo--------------------

let db=mongoose.connection;

//ESTUTURA PARA UM EVENTO: evento para quando houver erro
db.on("error", ()=>{
    console.log(error)
})



//ESTUTURA PARA UM EVENTO:para quando o banco de dados for carregado. sera executado uma função==============================================
db.once("open", ()=>{
   
    //FUNÇÃO 1- MOSTRA MENSAGEM "opicional"
    console.log("banco de dados carregado")

    //FUNÇÃO 2-REQUISIÇÃO GET PARA O BANCO DE DADOS: ler um dado quando o usuario requisitar
    app.get('/:title', async (req,res)=>{
        
        let title= req.params.title;//pegar o parametro titulo da requisição

        try{
        //buscar no banco de dados o titulo requsitado [find é usado para buscar dados no mongo. onde ({title}) vai ser oque sera procurado]
        let doc = await NomeColecao.find({title})// por causa do await sera esperado a resposta do titulo para poder continuar
        res.send(doc)//resposta para a requisição sera mostra o documento
        
        }catch (error){

            res.send(error);
        }
    })
   //=======================================================================================================================================

})
//-------------------------------------------------------------



app.listen(PORT, (req,res)=>{
    console.log("servidor esperando requisições");
})