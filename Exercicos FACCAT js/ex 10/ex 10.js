/*
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor. 
*/

let custo = 5000

let distribuidor = (custo * 28) / 100
let imposto = (custo * 45) / 100
let revenda = custo + distribuidor + imposto

document.write("O valor de revenda do carro é R$" + revenda)
