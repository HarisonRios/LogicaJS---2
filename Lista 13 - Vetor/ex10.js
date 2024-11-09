function positivosNegativos(listaNumeros = []) {
  var maiorZero = 0;
  var menorZero = 0;

  for (var posicao = 0; posicao < listaNumeros.length; posicao++) {
      if (listaNumeros[posicao] > 0) {
          maiorZero++;
      } else if (listaNumeros[posicao] < 0) {
          menorZero++;
      }
  }

  return `positivos: ${maiorZero}, negativos: ${menorZero}`;
}


console.log(positivosNegativos([3, -1, 4, 0, -6, 8, -2])); 

