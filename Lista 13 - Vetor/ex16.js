function inverterValoresVetor(vetor = []) {
    var vetorInvertido = []; 
    for (var contador = vetor.length - 1; contador >= 0; contador--) { 
        vetorInvertido.push(vetor[contador]);
    }
    return vetorInvertido; 
}


console.log(inverterValoresVetor([1, 2, 3, 9, 8, 5, 4]))
console.log(inverterValoresVetor([4, 5, 6, 7, 10, 11]))