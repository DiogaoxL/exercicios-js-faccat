/*
Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
*/

let senha_certa = 9999
let codigo_certo = 1234

let cod_usuario = Number(prompt("digite seu código: "))
let senha = 0

if (cod_usuario === codigo_certo) {
  alert("usuario correto!")
   senha = Number(prompt("Digite sua senha: "))

   if (senha === senha_certa) {
    alert("senha correta!")
   } else{
    alert("senha incorreta!")
   }
} else{
  alert("Usuario invalido! tente novamente")
}







