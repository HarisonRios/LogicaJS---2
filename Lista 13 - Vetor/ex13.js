function valoresMaioresQueN(vetor, n) {
    let resultados = [];


    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > n) {
            resultados.push(vetor[i]);
        }
    }

   
    return resultados;
}


console.log(valoresMaioresQueN([1, 5, 8, 10, 3], 5)); 
console.log(valoresMaioresQueN([2, 3, 4, 1, 7], 4)); 
console.log(valoresMaioresQueN([1, 2, 3], 3));
