/*
A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas). 
*/
let tempo_mensal = 180
let tempo_diario = 8

let salario_normal = tempo_mensal * tempo_diario
let horas_semanais = tempo_mensal / 4

let hora_extra = 0
let salario_extra = 0
let novo_salario = 0

if (horas_semanais > 40) {
  hora_extra = (tempo_diario * 50) / 100 + tempo_diario

  salario_extra = horas_semanais * hora_extra
  novo_salario = salario_extra + salario_normal

  document.write('você trabalhou ' + horas_semanais + ' horas semanais ')
  document.write('entao recebera ' + salario_extra + ' a mais esse mês')
  document.write('seu novo salario ficara R$' + novo_salario)
} else {
  document.write('você trabalhou ' + horas_semanais + ' horas semanais ')
  document.write('seu salario ficara R$' + salario_normal)
}
