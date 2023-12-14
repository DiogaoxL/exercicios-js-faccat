/*
Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores. 
*/

let n1 = 10
let n2 = 15
let n3 = 11

let maior = 0
let meio = 0
let menor = 0

if (n1 > n2 && n1 > n3) {
  maior = n1
  if (n2 > n3) {
    meio = n2
  } else {
    meio = n3
  }
} else 
if (n2 > n1 && n2 > n3) {
  maior = n2
  if (n1 > n3) {
    meio = n1
  } else {
    meio = n3
  }
} else {
  maior = n3
  if (n1 > n2) {
    meio = n1
  } else {
    meio = n2
  }
}

document.write('o maior foi: ' + maior)
document.write('a soma dos maiores valores: ' + (maior + meio))
