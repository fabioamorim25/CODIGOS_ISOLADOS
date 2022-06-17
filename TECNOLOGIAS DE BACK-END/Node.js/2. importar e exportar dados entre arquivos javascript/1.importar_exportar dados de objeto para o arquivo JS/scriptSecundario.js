//ARQUIVO DE EXPORTAÇÃO DE DADOS: onde temos varias funções que realizam um determinado processo quando for chamada. sendo preciso receber as informações para realizar esse processo ===============


//PARTE 2: sua extrutura é usado um OBJETO onde sera recebido todas as funções que estão relacionadas ao arquivo ============================ 
let calculadora = {

    soma: (x, y) => {
        return x + y;
    }
    // .......

}

//extrutura para dizer que esse arquivo mode.js é usado para exportar dados (e sera exportado os resultados encontrados no objeto calculadora)
module.exports = calculadora;
//============================================================================================================================================