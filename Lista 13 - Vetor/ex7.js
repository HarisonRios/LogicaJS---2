function retornarNumerosPares(listaNumeros = []) {

    var guardarPar = 0
    for (var posicao = 0; posicao < listaNumeros.length; posicao += 1) {
        if(listaNumeros[posicao] % 2 == 0){
           guardarPar++
        }
    }

    return guardarPar

}

console.log(retornarNumerosPares([2,3,4,5,6,7,8,10]))