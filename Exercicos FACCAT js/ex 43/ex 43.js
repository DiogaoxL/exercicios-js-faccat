// ex 43 faccat pag 10

let a = 4
let b = 4
let c = 4

let mens = ''

if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) {
    mens = 'Triângulo Equilátero'
  } else {
    if (a === b && b === c && a === c) {
      mens = 'Triângulo Isósceles'
    } else {
      mens = 'Triângulo Escaleno'
    }
  }
} else {
  mens = 'Não e possível formar um triângulo'
}

document.write(mens)

//teste de mesa
// a | b | c | mensagem

// 1 | 2 | 3 | Não e possível formar um triângulo
// 3 | 4 | 5 | Triângulo Escaleno
// 2 | 2 | 4 | Não e possível formar um triângulo
// 4 | 4 | 4 | Triângulo Equilátero
// 5 | 3 | 3 | Triângulo Isósceles