/*
Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
*/ 

let n1 = 10
let n2 = 15
let n3 = 11

let maior = 0


if (n1 > n2 && n1 > n3) {
  maior = n1
} else {
  if (n2 > n1 && n2 > n3) {
    maior = n2
  } else{
    if (n3 > n1 && n3 > n2) {
      maior = n3
    }
  }
}

document.write("o maior numero digitado foi: " + maior)

