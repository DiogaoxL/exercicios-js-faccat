/*
Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores. 
*/

let candidatoA = 10
let candidatoB = 50
let candidatoC = 35

let votos_nulos = 15
let votos_brancos = 10

let votos_validos = candidatoA + candidatoB + candidatoC
let total_eleitores = votos_validos + votos_brancos + votos_nulos


let porc_tot_validos = (votos_validos * 100) / total_eleitores
let porc_tot_A = (candidatoA * 100) / total_eleitores
let porc_tot_B = (candidatoB * 100) / total_eleitores
let porc_tot_C = (candidatoC * 100) / total_eleitores
let porc_tot_nulos = (votos_nulos * 100) / total_eleitores
let brancos = (votos_brancos * 100) / total_eleitores

document.write("o número total de eleitores " + total_eleitores + "<br>")
document.write("o percentual correspondente de votos válidos em relação à quantidade de eleitores " + porc_tot_validos + "<br>")
document.write("o percentual correspondente de votos válidos do candidato A " + porc_tot_A + "<br>")
document.write("o percentual correspondente de votos válidos do candidato B " + porc_tot_B + "<br>")
document.write("o percentual correspondente de votos válidos do candidato C " + porc_tot_C + "<br>")
document.write("o percentual correspondente de votos nulos " + porc_tot_nulos + "<br>")
document.write("o percentual correspondente de votos em branco "+ brancos)
