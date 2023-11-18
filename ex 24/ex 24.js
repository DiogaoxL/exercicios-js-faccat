/*
Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total. 
*/

let salario_fixo = 1000
let valor_vendas = 2000
let comissao = 0

if (valor_vendas <= 1500) {
  comissao = (valor_vendas * 3) / 100
  document.write('seu novo salario é : ' + (comissao + salario_fixo))
} else {
    comissao = ((1500 * 3) / 100) + (((valor_vendas - 1500) * 5) / 100)
    document.write('seu novo salario é : '+ (comissao + salario_fixo))
}

// 45 + 25 = 70
// 1000 + 70 = 1070
