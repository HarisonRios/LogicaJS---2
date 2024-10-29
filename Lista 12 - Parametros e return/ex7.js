const vogais = str => {
    let contadorDeVogais = 0;

    for (let char of str.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            contadorDeVogais++;
        }
    }

    return contadorDeVogais;
};


console.log(vogais("Teste")); 
