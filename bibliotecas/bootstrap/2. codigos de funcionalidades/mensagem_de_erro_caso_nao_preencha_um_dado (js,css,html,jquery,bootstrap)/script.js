// PARTE 3:MOSTRA O ALERTA (tirando a teg do css .hide)
function cadastrar() {

    // se o valor do primeiro input cadastrar for vazio. faça:    
    if ($("input")[0].value == "") {

        //pegue a div da linha 26 html. e remova a classe hide dela (fazendo com que a div seja mostrada)
        $("#erro").removeClass("hide")

    } else {
        alert("Sucesso");
    }

}