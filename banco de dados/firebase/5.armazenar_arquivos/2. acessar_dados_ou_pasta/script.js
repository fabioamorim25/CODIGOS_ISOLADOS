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








//ACESSAR UM ARQUIVO OU PASTA DO STORAGE-------------

// criar uma variavel para pegar o arquivo atravez de uma referencia "nome da pasta ou arquivo"
const refereciaArquivo= storage.ref("/imagens");


//METODO: listar arquivos de uma pasta======
refereciaArquivo.listAll().then(resultado=>{

console.log(resultado.items);    

resultado.items [1]; 
})
//==========================================















//---------------------------------------------------