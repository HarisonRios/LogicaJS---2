function coletarMenorNumero(listaNumeros = []) {
    if (listaNumeros.length == 0) {
        return 'Sua lista esta vazia'
    }

    var menor = listaNumeros[0];
    for (var contador = 0; contador < (listaNumeros.length); contador++) {
        if (listaNumeros[contador] < menor) {
            menor = listaNumeros[contador]
        }
    }

    return menor
}

console.log(coletarMenorNumero([1, 2, 3]))
console.log(coletarMenorNumero([4, 5, 6]))