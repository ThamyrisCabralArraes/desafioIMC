
const classificacaoIMC = function (peso, altura) {
  let resultado = peso / (altura ** 2)
  
  if(resultado < 18.9) {
    return 'Abaixo do peso normal'
  }
  else if(resultado < 24.9) {
    return 'Peso normal'
  }
  else if(resultado < 29.9) {
    return 'Excesso de peso'
  }
  else if(resultado < 34.9) {
    return 'Obesidade grau I'
  }
  else {
    return 'Obesidade'
  }
}
console.log(classificacaoIMC(70, 1.65))