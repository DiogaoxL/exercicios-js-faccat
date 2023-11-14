/*
Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
//unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
//a pagar (total a pagar = total - desconto), sabendo-se que:
//- Se quantidade <= 5 o desconto será de 2%
//-Se quantidade > 5 e quantidade <=10 o desconto será de 3%
//-Se quantidade > 10 o desconto será de 5%
*/

let nome = 'bolacha'
let quantidade = 5
let valor_und = 2.5

let total = valor_und * quantidade

let valor_a_pagar = 0

if (quantidade <= 5) {
  valor_a_pagar = total - (total * 2) / 100
} else {
  if (quantidade > 5 && quantidade <= 10) {
    valor_a_pagar = total - (total * 3) / 100
  } else {
    valor_a_pagar = total - (total * 5) / 100
  }
}

document.write('Voce comprou ' + quantidade + ' und de ' + nome + '<br>')
document.write('O valor unitario de: ' + valor_und + '<br>')
document.write('O total a ser pago é ' + valor_a_pagar)
