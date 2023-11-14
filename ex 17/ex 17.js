/*
Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.
*/
let n1 = 5
let n2 = 9

let media = (n1+n2)/2

if (media >= 6) {
  document.write("Parabens vc foi aprovado! Sua media foi " + media)
} else {
  document.write("Parabens vc foi reprovado! Sua media foi " + media)
}

