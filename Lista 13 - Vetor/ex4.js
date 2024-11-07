function calcularMediaElementos(listaNumeros = []) {
    var somatoria = 0
    for (
        var posicao = 0;
        posicao < listaNumeros.length;
        posicao += 1
    ) {
        var numeroAtual = listaNumeros[posicao]
        somatoria += numeroAtual
    }
    var numeroElementos = listaNumeros.length
    return (somatoria / numeroElementos)
}


console.log(calcularMediaElementos([1,2,3,4]))
console.log(calcularMediaElementos([10,20,30,40]))
console.log(calcularMediaElementos([50,40,100,200]))