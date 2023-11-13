/*
Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro. 
*/

let n1 = 1
let n2 = 2

if (n1 === n2) {
  document.write("numeros iguais")
} else {
  if (n1 > n2) {
    document.write("Primeiro é maior")
  } else {
    document.write("Segundo maior")
  }
}



