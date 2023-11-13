//se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
//ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
//morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
//morango: ate 5kg R$ 2,50 por Kg;  mais de 5kg -> R$ 2,20 por Kg
//maçã: ate 5kg R$ 1,80 por Kg;  mais de 5kg -> R$ 1,50 por Kg

let kg_morango = 5
let kg_macas = 2
let valor_morango = 0
let valor_macas = 0
let total = 0

if (kg_morango <= 5) {
  valor_morango = kg_morango * 2.5
} else {
  if (kg_morango > 5) {
    valor_morango = kg_morango * 2.2
  }
}

if (kg_macas <= 5) {
  valor_macas = kg_macas * 1.8
} else {
  if (kg_macas > 5) {
    valor_macas = kg_macas * 1.5
  }
}

total = valor_macas +valor_morango


if (kg_macas + kg_morango > 8 || total > 25 ){
  total = total - ((total * 10)/100)
}

document.write("O total a ser pago " + total )


