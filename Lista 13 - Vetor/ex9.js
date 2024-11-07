function retornarVezesValor(listaNumeros = []) {

    var valorRepitido = 0
    for (var posicao = 0; posicao < listaNumeros.length; posicao += 1) {
        if(listaNumeros[posicao] == 3){
           valorRepitido++
        }
    }

    return valorRepitido
}



console.log(retornarVezesValor([3,3,4,3,3,8,3]))