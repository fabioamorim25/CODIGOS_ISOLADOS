//chamar o modulo padrão do proprio node.js (usado para utilizar os comandos auxiliares e manipular os arquivos)
let fs =require ('fs');

//===================================================
// mostra o arquivo que já existe.
// onde leva em consideração: nome do arquivo e formato; 'utf-8' é o formato que vai ser mostrado o arquivo; 'data' é o dado a ser mostrado 
fs.readFile('nomeDoArquivo.txt','utf-8' , (error, data) => {

    if (error) {
        throw error
    } console.log(data);
})
// ===================================================



// OBS: o formato 'utf-8' e usado para mostra strings 