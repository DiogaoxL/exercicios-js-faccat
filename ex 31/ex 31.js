/*
Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
*/

let a = 3
let b = 8
let c = 9

if (a < (b+c) && b < (a+c) && c < (a+b)) {
  document.write("triangulo existe!")
} else {
  document.write("triangulo não existe!")
}

