/*
replicar o algoritmo e fazer o teste de mesa com os valores que foram informado
*/

let x = 3
let y = 2
let z = (x*y) + 5
let resposta = ""


if ( z <= 0 ) {
  resposta = "A"
} else {
  if (z <= 100) {
    resposta = "B"
  } else {
    resposta = "C"
  }
}

document.write( z + "" + resposta)

   // teste de mesa:
   // x = 3  y=2  z=11  resposta = B
   // x = 150  y=455  z=11  resposta = C
   // x = 7  y=-1  z=-2  resposta = A
   // x = -2  y=5  z=11  resposta = C
   // x = 50  y=3  z=155  resposta = C

