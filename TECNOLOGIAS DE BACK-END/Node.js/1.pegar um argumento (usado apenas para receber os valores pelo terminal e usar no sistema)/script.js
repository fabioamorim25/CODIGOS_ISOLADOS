// ===================================================================================================================================
//CRIAR UMA VARIAVEL QUER VAI PEGAR TODOS OS ARGUMENTOS DIGITADOS:
//Onde, argumentos. vai pegar todos os argumentos digitados no terminal, e só vai utilizar os da posição 3 em diante para algum sistema
//let argumentos = process.argv.slice(2);

//assim, sera pegado o primeiro argumento digitado "posição 3" e colocar na variavel 'a'
//let a = Number(argumentos[0]);

//e vai pegar o segundo argumento digitado "posição 4" e colocar na variavel 'b'
//let b = Number(argumentos[1]);

//com isso podemos atribuir qualquer valor para a e b apenas chamando o terminal e definido os valores
// e depois utilizando em uma parte do codigo
// ===================================================================================================================================



//EXEMPLO DE USO: 
let argumentos = process.argv.slice(2);

let a = Number(argumentos[0]);

let b = Number(argumentos[1]);


let c= soma(a,b);//colocar as variaveis a e b na função soma 


function soma (x,y){
return x+y;
}


console.log(c);