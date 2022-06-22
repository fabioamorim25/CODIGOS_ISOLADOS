//chamar o modulo padrão do proprio node.js (usado para utilizar os comandos auxiliares e manipular os arquivos)
let fs =require ('fs');

//===================================================
// apagar todo o arquivo já criado 
fs.unlink('nomeDoArquivo.txt', (error) => {

    if (error) {
        throw error
    } console.log("arquivo apagado com sucesso");
})
// ===================================================
