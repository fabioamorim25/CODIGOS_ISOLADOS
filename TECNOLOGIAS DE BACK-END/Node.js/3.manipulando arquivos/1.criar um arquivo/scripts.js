//chamar o modulo padrão do proprio node.js (usado para utilizar os comandos auxiliares e manipular os arquivos)
let fs =require ('fs');



//  criar um arquivo e oque sera escrito (colocando uma string ou uma variavel que recebe algo)======
fs.writeFile('nomeDoArquivo.txt', 'texto que vai ser escrito no arquivo txt criado', (error) => {

    
    //verificar se teve algum erro ao criar o arquivo
    if (error) {
        throw error
    } console.log("arquivo criado com sucesso");
})
// ==================================================================================================
