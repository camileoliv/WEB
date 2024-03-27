const distancia = document.querySelector ('#distancia') /*dentro das aspas simples sempre coloque o nome da tag*/
const consumo = document.querySelector ('#consumo')
const preco = document.querySelector ('#preco')
const botao = document.querySelector ('#btn')
const resultado = document.querySelector ('#resultado')

botao.addEventListener('click', ()=> {
    d = Number (distancia.value) /*value pega somente o valor digitado no input*/ 
    c = Number (consumo.value) /*number corresponde ao inteiro no JS*/ 
    p = Number (preco.value)

    calculo = (d/c) * p

    resultado.textContent = `O gasto total para a viagem será de R$ ${calculo.toFixed(2)}` /*shift e crase para poder escrever no span, ${} para adicionar a variavel*/

}) /*evento e função juntos sem nome*/