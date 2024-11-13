// TENHO QUE FAZER AINDA

function removerDuplicatas(vetor) {
    let resultado = [];
  
    for (let i = 0; i < vetor.length; i++) {
      let valorUnico = true;
      
      for (let j = 0; j < resultado.length; j++) {
        if (vetor[i] === resultado[j]) {
          valorUnico = false;
          break;
        }
      }
  
      if (valorUnico) {
        resultado.push(vetor[i]);
      }
    }
  
    return resultado;
  }
  
  let numeros = [1, 2, 3, 4, 2, 3, 5, 6, 1];
  let numerosUnicos = removerDuplicatas(numeros);
  console.log(numerosUnicos);  
  