//[arquivo que contem todas as funções que o sistema pode realizar. onde sera exportado os resultados quando o arquivo principal fizer uma requisição para esse arquivo]

let metodoCalculadora = {

    soma: (x,y) => {
     return x + y;
    }
    ,
    multiplicacao: (x,y) => {
        return x * y;
    }

}

// responsavel por exportar os resultados do motodo da função requisitada
module.exports = metodoCalculadora;