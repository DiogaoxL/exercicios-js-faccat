/*
Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente. 
*/

let n1 = 1
let n2 = 9
let n3 = 5

let maior = 0
let meio = 0
let menor = 0

if (n1 > n2 && n2 > n3) {
  maior = n1
  meio = n2
  menor = n3
} else {
  if (n2 > n1 && n1 > n3) {
    maior = n2
    meio = n1
    menor = n3
  } else {
    if (n3 > n1 && n2 > n3) {
      maior = n2
      meio = n3
      menor = n1
    } else {
      if (n3 > n1 && n2 > n1) {
        maior = n3
        meio = n2
        menor = n1
      } else {
        if (n1 > n2 && n2 < n3) {
          maior = n3
          meio = n1
          menor = n2
        }
      }
    }
  }
}

document.write(
  'os valores em ordem crescente ' + menor + ' ' + meio + ' ' + maior
)
