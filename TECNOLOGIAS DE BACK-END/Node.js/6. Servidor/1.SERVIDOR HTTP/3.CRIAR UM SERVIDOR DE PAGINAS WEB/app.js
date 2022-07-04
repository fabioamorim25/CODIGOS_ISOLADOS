
const http = require ('http'); // chamar o modulo http do node
const url = require('url');
const fs= require('fs'); // sera usado para manipular arquivos "aqui sera usado para abrir arquivos" 



//criar o servidor----------------------------------------------------------------------------------------
http.createServer((request, response)=>{

//====================================================
let caminho=url.parse(request.url).pathname;// pegar o caminho"url" digitado no navegador (OBS: é uma requisição ao servidor). tendo esse endereço numa variavel pode ser usado para colocar no metodo do node [.readFile] que e responsavel por mostra arquivos

//verificação: autocompletar o endereço
if(caminho == " "|| caminho == "/"){
    caminho= "/index.html"
}

let nomeDoArquivoMostrado ="."+ caminho; // concatenação de . com qualquer caminho que seja requisitado pelo usuario (podendo assim ser usado a msm variavel para qualquer caminho digitado). o ponto é pq as paginas estão na mesma pagina do projeto
//====================================================
  
    // manipulando arquivos ------------------------------  
    fs.readFile(nomeDoArquivoMostrado, (error, data) => {

        if (error) {// CASO A PAGINA NÃO SEJA ENCONTRADA
            response.writeHead(404, {"content-Type":"text/html;charset=utf-8"}); // caso tenha um erro a resposta que o servidor vai enviar sera um erro [404] e uma informação no cabeçaho no formato texto em html
            response.end("A PAGINA NÃO FOI ENCONTRADA NO SISTEMA");// o conteudo enviado como resposta sera uma mensagem de erro. Onde não foi encontrado a pagina 
        }
        else{//CASO A PAGINA SEJA ENCONTRADA
            response.writeHead(200,{"content-Type":"text/html"});// caso tenha seja encontrda a resposta que o servidor vai enviar sera ok [codigo 200] e uma informação no cabeçaho no formato texto em html
            response.write(data);//mostra os dados da pagina de texto html para o usuario
            response.end(); //final da resposta
        }
    })
    //-----------------------------------------------------

})

//-definir a porta que espera a requisição---------- 
.listen(3000, (error)=>{
    if (error){
        console.log(error);
    }else{
        console.log("o servidor esta funcionando")
    }
})
//--------------------------------------------------
