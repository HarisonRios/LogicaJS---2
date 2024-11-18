function valoresUnicos(vetor) {
    let unicos = [];


    for (let i = 0; i < vetor.length; i++) {
        let encontrado = false;
        for (let j = 0; j < unicos.length; j++) {
            if (vetor[i] === unicos[j]) {
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            unicos.push(vetor[i]);
        }
    }

    return unicos;
}


console.log(valoresUnicos([1, 2, 2, 3, 4, 4, 5])); 
console.log(valoresUnicos([10, 10, 10, 10])); 
console.log(valoresUnicos([7, 8, 9, 8, 9, 10])); 
