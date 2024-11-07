function retornarNumerosImpares(listaNumeros = []) {

    var guardarImpar = 0
    for (var posicao = 0; posicao < listaNumeros.length; posicao += 1) {
        if(listaNumeros[posicao] % 2 != 0){
           guardarImpar++
        }
    }

    return guardarImpar
}



console.log(retornarNumerosImpares([2,3,4,5,6,7,8,10]))