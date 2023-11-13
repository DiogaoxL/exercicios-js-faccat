/*
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra.
*/

let apple = 5
let valor = 0

if (apple < 12) {
  valor = apple * 1.30
} else {
  if (apple >= 12) {
    valor = apple * 1
  }
}
document.write("O valor total ficou: R$" + valor)
