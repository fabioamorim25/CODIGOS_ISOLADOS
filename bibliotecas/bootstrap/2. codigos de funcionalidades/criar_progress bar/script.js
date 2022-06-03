//--------------------------------------------
//criar uma função onde sera executado uma ação que vai ser atualizada a cada 200 milesegundos
// setInterval(()=>{


// }, 200)
//--------------------------------------------

//----------------------------------------------
// let valorProcesso=0; // iniciar a contagem por zero

//caso a contagem chegue no valor 100 o valor do porcesso fica com o valor 100 (para nao passar de 100 a contagem)
// if (valorProcesso>100){

//     valorProcesso=100;
// }
//----------------------------------------------


//-apartir do processo ja carregado sera colocado o valor correspondente
//progressBar.innerHTML=valorProcesso + "%";
//progressBar.style.width= valorProcesso + "%";
//-------------















//CODIGO-------------------------------------------------------------------

//pegar o elemento a ser trabalhado (o elemento com a classe ´progress-bar)
let progressBar=document.querySelector (".progress-bar");


let valorProcesso=0; // iniciar a contagem por zero


setInterval(()=>{

    if (valorProcesso>100){

        valorProcesso=100;
    }

progressBar.innerHTML=valorProcesso + "%";
progressBar.style.width= valorProcesso + "%";
valorProcesso ++;
 
}, 900)
//----------------------------------------------------------------------------