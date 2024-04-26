//DOM
const pesquisa = document.querySelector ('.input-cidade')
const btn = document.querySelector ('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temp = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = '5aee498e759a3d1956f2ce7249c88eed'


btn.addEventListener ('click',buscarcidade)
//tem que colocar async em todas as funções que vão consumir API
async function buscarcidade(){

    const cidade = pesquisa.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(answer => answer.json())

    console.log(dados)

    nome_cidade.textContent = `Tempo em ${dados.name}`
    temp.textContent = `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`


}

