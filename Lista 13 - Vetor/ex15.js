function nMaioresValores(vetor, n) {
    let maioresValores = []; 

    for (let i = 0; i < vetor.length; i++) {
        if (maioresValores.length < n) {
            maioresValores.push(vetor[i]);
        } else {
            let menorValorIndex = -1;
            let menorValor = Infinity;

            for (let j = 0; j < maioresValores.length; j++) {
                if (maioresValores[j] < menorValor) {
                    menorValor = maioresValores[j];
                    menorValorIndex = j;
                }
            }

            if (vetor[i] > menorValor) {
                maioresValores[menorValorIndex] = vetor[i];
            }
        }
    }

    return maioresValores;
}


console.log(nMaioresValores([1, 34, 78, 2, 5, 77], 2)); 
console.log(nMaioresValores([42, 1, 3, 12, 273, 19], 4)); 
