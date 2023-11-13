/*
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 
*/

let ano_atual = 2023
let ano_nasc = 2000


let idade = ano_atual - ano_nasc

if (idade >= 16 && idade < 17) {
  document.write("Voto opcional")
} else {
  if (idade >= 18) {
    document.write("Voto Obrigatório")
  } else{
    document.write("não vota!")
  }
}