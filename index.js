
function classificacaoIMC (peso, altura) {
  let resultado = peso / (altura ** 2)
  if(resultado < 18) {
    return 'abaixo do peso normal'
  }
  else if(resultado > 18 && resultado < 24) {
    return 'peso normal'
  }
  else if(resultado > 25 && resultado < 29) {
    return 'excesso de peso'
  }
  else if(resultado > 30 && resultado < 34) {
    return 'obesidade grau I'
  }
  else {
    return 'Obesidade'
  }
}
console.log(classificacaoIMC(40, 1,65))