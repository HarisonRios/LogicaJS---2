// Explicando `push`, `splice`, e percorrendo vetores

// 1. `push` - Adiciona um novo elemento ao final do vetor
var numeros = [1, 2, 3];
numeros.push(4); // Adiciona o número 4 no final
console.log(numeros); // Saída: [1, 2, 3, 4]


// 2. `splice` - Remove ou substitui elementos do vetor em uma posição específica
// No exemplo abaixo, remove o elemento na posição 1 (segundo elemento)
numeros.splice(1, 1); // Remove o número 2
console.log(numeros); // Saída: [1, 3, 4]


let fruta = ['banana', 'maçã', 'laranja', 'morango', 'kiwi'];
frutas.splice(2, 2); // Remove 2 elementos a partir do índice 2 (laranja e morango)
console.log(frutas); // ['banana', 'maçã', 'kiwi']

let fruts = ['banana', 'maçã', 'laranja'];
frutas.splice(2, 0, 'morango', 'kiwi'); // Adiciona 'morango' e 'kiwi' no índice 2
console.log(frutas); // ['banana', 'maçã', 'morango', 'kiwi', 'laranja']

let frutas = ['banana', 'maçã', 'laranja'];
frutas.splice(1, 1, 'manga', 'kiwi'); // Remove 1 elemento no índice 1 ('maçã') e adiciona 'manga' e 'kiwi'
console.log(frutas); // ['banana', 'manga', 'kiwi', 'laranja']



// 3. Percorrendo um vetor para coletar valores

// Exemplo de função que soma todos os elementos pares de um vetor
function somarPares(listaNumeros = []) {
    var somaPares = 0;

    for (var i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0) {
            somaPares += listaNumeros[i];
        }
    }

    return somaPares;
}

console.log(somarPares([1, 2, 3, 4])); // Saída: 6 (soma de 2 + 4)



// Função para somar todos os elementos de uma lista de números
function somarElementos(listaNumero = []) {
    if (listaNumero.length == 0) {
        return 'Sua lista está vazia';
    }

    var somatoria = 0;
    for (var posicao = 0; posicao < listaNumero.length; posicao++) {
        somatoria += listaNumero[posicao];
    }

    return somatoria;
}

console.log(somarElementos([1, 2, 3])); // Saída: 6
console.log(somarElementos([4, 5, 6])); // Saída: 15


// Função para coletar o maior número de uma lista de números
function coletarMaiorNumero(listaNumeros = []) {
    if (listaNumeros.length == 0) {
        return 'Sua lista está vazia';
    }

    var maior = listaNumeros[0];
    for (var contador = 1; contador < listaNumeros.length; contador++) {
        if (listaNumeros[contador] > maior) {
            maior = listaNumeros[contador];
        }
    }

    return maior;
}

console.log(coletarMaiorNumero([1, 2, 3])); // Saída: 3
console.log(coletarMaiorNumero([4, 5, 6])); // Saída: 6



// Exemplo de função que conta a quantidade de números maiores que 5 no vetor
function contarMaioresQueCinco(listaNumeros = []) {
    var contador = 0;

    for (var i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > 5) {
            contador++;
        }
    }

    return contador;
}

console.log(contarMaioresQueCinco([1, 6, 7, 3, 10])); // Saída: 3 (6, 7 e 10 são maiores que 5)





function calcularMedia(vetor) {
    // Verifica se o vetor não está vazio
    if (vetor.length === 0) {
        return 0; // Retorna 0 se o vetor estiver vazio
    }

    // Soma todos os elementos do vetor
    let soma = vetor.reduce((acumulador, atual) => acumulador + atual, 0);

    // Calcula a média dividindo a soma pelo número de elementos
    return soma / vetor.length;
}

// Exemplo de uso
const numeros = [10, 20, 30, 40, 50];
console.log(calcularMedia(numeros)); // Saída: 30


