/*
Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescent
*/

let n1 = 2
let n2 = 3
let maior = 0
let menor = 0

if (n1 > n2) {
   maior = n1
   menor = n2
} else {
  maior = n2
  menor = n1
}

document.write("o menor é " + menor + " e o maior " +  maior)

