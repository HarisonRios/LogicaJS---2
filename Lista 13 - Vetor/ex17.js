function retornarNumeroNegativos(listaNumeros = []) {

    var guardarNegativo = 0
    for (var posicao = 0; posicao < listaNumeros.length; posicao += 1) {
        if(listaNumeros[posicao] < 0){
           guardarNegativo++
        }
    }

    return guardarNegativo

}

console.log(retornarNumeroNegativos([-2,2,5,7,-3,-7]))