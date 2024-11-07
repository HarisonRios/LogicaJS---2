function selecionarPares(listaNumeros = []) {
    var listaPares = []
    for (
        var posicao = 0;
        posicao < listaNumeros.length;
        posicao += 1
    ) {
        var numeroAtual = listaNumeros[posicao]
        if (ePar(numeroAtual)) {
            listaPares.push(numeroAtual)
        }
    }
    return listaPares
}

function ePar(numero) {
    return numero % 2 == 0
}

console.log(selecionarPares([1,2,3,4]))
console.log(selecionarPares([10,13,18,20,56,42]))
console.log(selecionarPares([7,9,11,13,14,21]))