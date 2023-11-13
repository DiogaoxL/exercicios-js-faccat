/*
Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
*/

let comeco = 0
let fim = 48

let horas_jogadas = fim - comeco

if (horas_jogadas < 24) {
  document.write('o jogo durou ' + horas_jogadas + 'hrs')
} else {
  if (horas_jogadas >= 24) {
    document.write('o jogo durou ' + horas_jogadas / 24 + ' dias ')
    document.write('O jogo pode tem no maximo 24hrs de duração')
  }
}
