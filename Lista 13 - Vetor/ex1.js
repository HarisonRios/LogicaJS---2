function somarElementos(listaNumero = []){
    if(listaNumero.length == 0){
        return 'Sua lista esta vazia'
    }

    var somatoria = 0
    for(posicao = 0; posicao < listaNumero.length; posicao++){
        somatoria += listaNumero[posicao]
    }

    return somatoria
}



console.log(somarElementos([1,2,3]))
console.log(somarElementos([4,5,6]))