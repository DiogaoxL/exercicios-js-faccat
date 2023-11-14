// ex 41 faccat

let n1 = 8
let n2 = 9
let n3 = 10

let media_exercicios = 10

let media_de_aproveitamento = (n1+ n2 *2 + n3 * 3 + media_exercicios) / 7

if (media_de_aproveitamento >= 9) {
  document.write('A')
}

if (media_de_aproveitamento >= 7.5 && media_de_aproveitamento < 9) {
  document.write('B')
}

if (media_de_aproveitamento >= 6 && media_de_aproveitamento < 7.5) {
  document.write('C')
}

if (media_de_aproveitamento < 6) {
  document.write('D')
}