// 3° PARTE: copiar as cofigurações do banco de dados do projeto
const firebaseConfig = {
    apiKey: "AIzaSyD-dYTiaxwADWUOu69B7jZC4_qmBz7pLSU",
    authDomain: "projeto-teste-e5a52.firebaseapp.com",
    projectId: "projeto-teste-e5a52",
    storageBucket: "projeto-teste-e5a52.appspot.com",
    messagingSenderId: "186244678707",
    appId: "1:186244678707:web:7dc03f5de5505bf9bfcf46",
    measurementId: "G-GNESNWR3RM"
};
//---------------------------------------------------------------
// iniciar o banco de dados do projeto
firebase.initializeApp(firebaseConfig);

//criar o objeto storage para manipular os arquivos 
const storage= firebase.storage();
//=============================================================================



        
        //[DESCOMENTAR UMA PARTE DO CODIGO PARA FAZER O CODIGO FUNCIONAR]


//ACESSAR UM ARQUIVO DENTRO DE UMA PASTA============================================================

// //METODO:listar arquivos de uma pasta-------------------

// // criar uma variavel para pegar o arquivo atravez de uma referencia "nome da pasta"
// const refereciaArquivo= storage.ref("/imagens"); //altera apenas o nome da variavel, e o nome da pasta que tem o arquivo desejado

// refereciaArquivo.listAll().then(resultado=>{

// console.log(resultado.items);    
// })
// //------------------------------------------------------


// //METODO:baixar um arquivo de uma pasta pelo url---------

// // criar uma variavel para pegar o arquivo atravez de uma referencia "nome da pasta"
// const refereciaArquivo= storage.ref("/imagens"); //altera apenas o nome da variavel, e o nome da pasta que tem o arquivo desejado

// refereciaArquivo.listAll().then(resultado=>{

//     //resultado.items [numero do arquivo que esta na pasta]. 
//     resultado.items [1].getDownloadURL().then(url=>{
    
//         console.log(url);// mostra o url do arquivo para poder baixar
//     })
//     })
// //--------------------------------------------------------
//===================================================================================================








//ACESSAR UM ARQUIVO DIRETO PELO NOME (para baixar o arquivo)========================================

// criar uma variavel para pegar o arquivo atravez de uma referencia "nome da pasta ou arquivo"
const refereciaArquivo= storage.ref("/imagem_moto.jpg");//altera apenas o nome da variavel, e o nome do arquivo


refereciaArquivo.getDownloadURL().then (url =>{

    console.log(url);// mostra o url do arquivo para poder baixar
})
//===================================================================================================