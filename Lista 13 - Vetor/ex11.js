function somarVetores(listaNumeros1 = [], listaNumeros2 = []) {
    resultado = []
    for (var posicao = 0; posicao < listaNumeros1.length; posicao++) {
        resultado.push(listaNumeros1[posicao] + listaNumeros2[posicao]);
    }
    return resultado;
}


listaNumeros1 = [3, 5,];
listaNumeros2 = [3, 3,];

console.log(somarVetores(listaNumeros1, listaNumeros2)); 
