function temDuplicados(vetor) {
    let numerosVistos = [];

    for (let i = 0; i < vetor.length; i++) {
        let numeroDuplicado = false;

        // Verifica se o número já foi adicionado no vetor "numerosVistos"
        for (let j = 0; j < numerosVistos.length; j++) {
            if (vetor[i] === numerosVistos[j]) {
                numeroDuplicado = true;
                break;  // Se encontrou duplicado, sai do laço
            }
        }

        if (numeroDuplicado) {
            return true;  // Retorna true se encontrar um número duplicado
        }

        // Caso contrário, adiciona o número ao vetor de números vistos
        numerosVistos.push(vetor[i]);
    }

    return false;  // Retorna false se não encontrar duplicados
}

console.log(temDuplicados([1, 2, 3, 4, 5]));  // false
console.log(temDuplicados([1, 2, 3, 4, 5, 3]));  // true
