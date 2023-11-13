/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.
*/

let vendas_carro = 2
let tot_vendas = 20000
let salario_fixo = 5000

let qnt_de_porc = vendas_carro * 5
let comissao = (tot_vendas * qnt_de_porc) / 100
let novo_salario = salario_fixo + comissao

document.write("o seu salario esse mês foi de: " + novo_salario)
