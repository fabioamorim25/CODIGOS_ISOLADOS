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
const storage = firebase.storage();
//========================================================================================================================================






//FAZER UPLOUD DE ARQUIVOS DO JS PARA O STORAGE================================================

// criar uma variavel para definir qual pasta sera colocado o arquivo quando for enviado para o storage (obs: a pasta ja deve existir)
const refereciaPasta = storage.ref("/imagens"); //altera apenas o endereço onde o arquivo vai ficar e o nome do arquivo[pasta/  ..../nome do arquivo.formato]


//pegar o elemento que o usuario mandou pelo input no html linha:32
const inputArquivo = document.getElementById("inputArquivo");




//Criar um evento que ao colocar um arquivo ele já ser mandado para o Storage
inputArquivo.addEventListener("change", (e) => {

    const file = e.target.files[0];//selecionar o arquivo


    //----------------------------------------------------------
    //Codigo para fazer o Uploud de arquivos usando o metodo: [.put(arquivo a ser enviado)]
    refereciaPasta.child(file.name).put(file).then((snapshot) => {

        console.log(snapshot);
        console.log("enviado com sucesso");
    })
    //----------------------------------------------------------


})
//===========================================================================================