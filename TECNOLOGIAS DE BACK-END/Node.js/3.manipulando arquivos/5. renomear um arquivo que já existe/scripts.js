//chamar o modulo padrão do proprio node.js (usado para utilizar os comandos auxiliares e manipular os arquivos)
let fs =require ('fs');

//===================================================
// renomear um arquivo que já existe 
fs.rename('nomeDoArquivo.txt', 'novoNomeDoArquivo.txt', (error) => {

    if (error) {
        throw error
    } console.log("arquivo renomeado com sucesso");
})
// ===================================================
