/*
Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/

let t1 = prompt("qual o nome do primeiro time? ")
let t2 = prompt("qual o nome do segundo time? ")

let gol1 = Number(prompt("Quantos gols marcou o " + t1))
let gol2 = Number(prompt("Quantos gols marcou o " + t2))

if (gol1 > gol2) {
  document.write("O " + t1 + " venceu o jogo!")
} else {
  if (gol1 < gol2) {
    document.write("O " + t2 + " venceu o jogo!")
  } else {
    document.write("o jogo empatou!")
  }
}
