//escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
//dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
//das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
//novo com a mulher mais velha.

let h1 = 18
let h2 = 17
let homem_mais_velho = 0
let homem_mais_novo = 0

let m1 = 19
let m2 = 20
let mulher_mais_velha = 0
let mulher_mais_nova = 0

if (h1 > h2) {
  homem_mais_velho = h1
  homem_mais_novo = h2
} else {
  homem_mais_velho = h2
  homem_mais_novo = h1
}

if (m1 > m2) {
  mulher_mais_velha = m1
  mulher_mais_nova = m2
} else {
  mulher_mais_velha = m2
  mulher_mais_nova = m1
}

document.write(
  'a soma das idades do homem mais velho com a mulher mais nova é ' +
    (homem_mais_velho + mulher_mais_nova) + "<br>"
)
document.write(
  'o produto das idades do homem mais novo com a mulher mais velha é ' +
    homem_mais_novo * mulher_mais_velha
)
