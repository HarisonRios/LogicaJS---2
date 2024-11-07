function filtrarImpares(listaNumeros = []) {
    var listaImpares = []
    for (
        var posicao = 0;
        posicao < listaNumeros.length;
        posicao += 1
    ) {
        var numeroAtual = listaNumeros[posicao]
        if (eImpar(numeroAtual)) {
            listaImpares.push(numeroAtual)
        }
    }
    return listaImpares
}

function eImpar(numero) {
    return numero % 2 != 0
}

console.log(filtrarImpares([1,2,3,4]))
console.log(filtrarImpares([10,13,18,20,56,42]))
console.log(filtrarImpares([7,9,11,13,14,21]))