/*
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
*/

let num_conta = 22425
let saldo = 5000
let debito = 8000
let credito = 5000


let saldo_atual = saldo - debito + credito

if (saldo_atual >= 0) {
  document.write("Saldo positivo "  + saldo_atual)
} else {
  document.write("Saldo negativo " + saldo_atual)
}