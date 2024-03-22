const peso = document.querySelector ('#weight')
const altura = document.querySelector ('#height')
const botao = document.querySelector ('#calculate')
const resultado = document.querySelector ('#result')

botao.addEventListener('click', ()=>
{
    event.preventDefault()

    w = peso.value
    h = altura.value/100

    imc = w/(h**2) 

    resultado.textContent = `O seu IMC é ${imc.toFixed(2)}`
})