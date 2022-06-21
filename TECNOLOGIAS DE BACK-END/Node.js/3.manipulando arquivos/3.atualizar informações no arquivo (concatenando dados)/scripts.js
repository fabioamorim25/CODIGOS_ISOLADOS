//chamar o modulo padrão do proprio node.js (usado para utilizar os comandos auxiliares e manipular os arquivos)
let fs =require ('fs');


//======================================================================================================================================
// obs: já tendo o arquivo. para colocar mais informações é usado o metodo [.appendFile] 
// onde ele recebe o nome do arquivo; a informação a ser concatenada as informações que já existem; e uma função que mostra se teve erro  



//adicionar mais informações ao arquivo já criado (concatenado)
fs.appendFile('nomeDoArquivo.txt', '-- texto que foi concatenado ao arquivo txt já criado', (error) => {

    if (error) {
        throw error
    } console.log("atualização adicionas com sucesso");
})
// =====================================================================================================================================
