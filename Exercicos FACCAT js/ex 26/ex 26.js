/*
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'. 
*/

let qnt_atual = 11
let qnt_maxima = 10
let qnt_minima = 2

let qnt_media = (qnt_maxima+qnt_minima)/2 

if (qnt_atual >= qnt_media) {
  document.write("Não efetuar compra")
} else {
  document.write("efetuar compra")
}