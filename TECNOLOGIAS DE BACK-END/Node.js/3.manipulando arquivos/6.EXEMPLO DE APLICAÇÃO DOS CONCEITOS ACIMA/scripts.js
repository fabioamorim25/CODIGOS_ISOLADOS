//-------------------------------------
let fs =require ('fs'); //chamar o modulo padrão do proprio node.js (usado para utilizar os comandos auxiliares e manipular os arquivos)
//-------------------------------------


//------------------------------------
let argumentos= process.argv.slice(2);// considera apenas do terceiro argumento digitado em diante
//------------------------------------


//-----------------------------
let arquivo1 = argumentos[0]; // cria uma variavel que sera o primeiro arquivo.  e esse sera o arquivo original
//-----------------------------



//- LER UM ARQUIVO--------------------------------------------
fs.readFile(arquivo1, 'utf8', (error, data) => {

    if (error) {//caso tenha um erro ao ler o arquivo
        throw error
    };

    //==CRIAR UM ARQUIVO: e colocar todas as letras do arquivo para maiusculas
    fs.writeFile(arquivo1 + "_Uppercase", data.toUpperCase(), (error) => {

        if (error) {
            throw error
        }; console.log("arquivo gerado com sucesso");
    })
    //========================================================================
})
//------------------------------------------------------------