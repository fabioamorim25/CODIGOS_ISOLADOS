//chamar o express para esse arquivo para poder usar o router
const express = require('express');
// executar o router que é parecido com o metodo app
const router = express.Router();
//-----------------------------------------------------------




// CODIGOS DAS FUNÇÕES DO PACOTE============

// dados que esta nessa rota
let nomes = [{id:0,nome:"jose"},
             {id:1,nome:"maria"},
             {id:3,nome:"joão"}];


//2° ROTA: requisição para ver um dado do servidor (ao digitar localhost:8080/nomeDaRota vai mostra esse resultado)
router.get("/nomeDaRota", (req, res) => {

  //vai mostra a resposta para essa requisição. mostrando o dado 
  res.json(JSON.stringify(nomes));
  
})
//------------------------------------------------------------------------------------------------------------------


//3° ROTA: requisição para ver um dado do servidor (ao digitar localhost:8080/rotaParaTrazerUmDadoEspecifico vai mostra esse resultado)
router.get("/rotaParaTrazerUmDadoEspecifico/:id", (req, res) => {

  let nome = nomes[req.params.id]//pegar todos os elementos do array  

  //mostra a resposta no formato json
  res.json(nome);

  
})
//-------------------------------------------------------------------------------------------------------------------------------------




//EXPORTAR OS DADOS PARA SER USADO NO ARQUIVO PRINCIPAL
module.exports = router;