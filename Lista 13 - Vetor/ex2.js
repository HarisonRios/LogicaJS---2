function coletarMaiorNumero(listaNumeros = []) {
    if (listaNumeros.length == 0) {
        return 'Sua lista esta vazia'
    }

    var maior = 0;
    for (var contador = 0; contador < (listaNumeros.length); contador++) {
        if (listaNumeros[contador] > maior) {   
            maior = listaNumeros[contador]
        }
    }

    return maior
}

console.log(coletarMaiorNumero([1, 2, 3]))
console.log(coletarMaiorNumero([4, 5, 6]))