/* 
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
//seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
//que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.
// Álcool: até 20 litros, desconto de 3% por litro ; acima de 20 litros, desconto de 5% por litro
//Gasolina: até 20 litros, desconto de 4% por litro ; acima de 20 litros, desconto de 6% por litro
*/

let litros_vendidos = 20
let tipo_combustivel = 'G' // A de alcool e G de gasolina
let valor = 0
let valor_total = 0

if (tipo_combustivel === 'A') {
  if (litros_vendidos <= 20) {
    valor = litros_vendidos * 2.9
    valor_total = valor - (2.9 * 3) / 100
    document.write('o valor a ser pago é: ' + valor)
  }
} else {
  if (litros_vendidos > 20) {
    valor = litros_vendidos * 2.9
    valor_total = valor - (2.9 * 5) / 100
    document.write('o valor a ser pago é: ' + valor)
  }
}

if (tipo_combustivel === 'G') {
  if (litros_vendidos <= 20) {
    valor = litros_vendidos * 3.30
    valor_total = valor - (3.30 * 4) / 100
    document.write('o valor a ser pago é: ' + valor)
  }
} else {
  if (litros_vendidos > 20) {
    valor = litros_vendidos * 3.30
    valor_total = valor - (3.30 * 6) / 100
    document.write('o valor a ser pago é: ' + valor)
  }
}
