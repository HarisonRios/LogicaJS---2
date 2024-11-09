function verificarOrdenacao(listanumeros) {
    for (let i = 0; i < listanumeros.length - 1; i++) {
        if (listanumeros[i] > listanumeros[i + 1]) {
            return false;
        }
    }

    return true;
}


console.log(verificarOrdenacao([1, 2, 3, 4, 5])); 
console.log(verificarOrdenacao([1, "2", "3", 4])); 
console.log(verificarOrdenacao([1, 3, 2, 4, 5])); 
