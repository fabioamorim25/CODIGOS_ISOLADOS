const PORT= 3000;

const express= require('express');
const bodyParser = require('body-parser');
const app= express();


//dados do sistema-------------------------
let dados=[{id:"asdqr",
            title:"teste de dados",
            discription:"descrição teste"}
           ];
//-----------------------------------------




//resposta post (criar novo dado)===================================================================================================
app.post("/novoDado",bodyParser.json(), (req,res)=>{

    //---DEFINIR A ESTRUTURA DOS NOVOS ELEMENTOS (em formato json)--------------------------------------------------------------
    let id= geraID(); //criar um id onde esse id é feito pela função geraID
    let title= req.body.title; // criar um titulo para o dado. onde é definido pelo front end
    let description = req.body.description;//criar uma descrição para o dado. onde é definido pelo front end
    //--------------------------------------------------------------------------------------------------------

    //-ADICIONAR O NOVO DADO COM AS CARACTERISTICAS ACIMA NO ARRAY DADOS--
    //push() usado para adicionar novos elementos. colocando dentro um objeto com os identificadores acima
    dados.push({id,title,description});
    //--------------------------------------------------------------------

    //mostra uma mensagem de confirmação
    res.send("dado adicionado");
});
//==================================================================================================================================


//resposta get (mostra dados do sistema)============================================================================================
app.get("/mostraDado",(req,res)=>{

    // mostra os todos os dados do sistema
    res.json(JSON.stringify(dados))

    
    
})
//==================================================================================================================================





app.listen(PORT,(req,res)=>{
console.log("servidor esperando requisição");
});





// função para criar id aleatorio para cada novo dado adicionado
function geraID(){

    //gera os IDs apartir da base exadecimal (e pegar apartir das letras)

    //Math.random() gera um numero aleatorio
    //toString() faz o numero virar uma string
    //36 dentro do toString() vai define a base do numero gerado (a base 36 vai possuir todas as letras e todos os numeros. diferente da base 16 que so tera uma parte tendo assim menos combinações possiveis)
    //substring() pegar a substring ou seja uma parte da string. onde inicia do segundo caracter ate o nono caracter
    return Math.random().toString(36).substring(2,9);
};