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



//ACESSAR UM ARQUIVO DENTRO DE UMA PASTA============================================================

//Definir um nome para a variavel que irá receber  o endereço da  pasta raiz ou pai para ser uma das referência dos dado a ser encontrado
const ref= storage.ref("/imagens");

//Definir um nome para a variavel que irá receber  o nome do arquivo a ser selecionado para ser uma das referência    
const fileRef = ref.child("3.jpg")


//trazer o arquivo em forma de URL para ser baixado
fileRef.getDownloadURL().then(url =>{


    console.log(url)//mostra o url do arquivo
})
//===================================================================================================
