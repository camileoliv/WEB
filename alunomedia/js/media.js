const pessoa = document.querySelector ('#Nome')

const notaum = document.querySelector ('#primeiraUnidade')
const notadois = document.querySelector ('#segundaUnidade')
const notatres = document.querySelector ('#terceiraUnidade')

const resultado = document.querySelector ('#result')
const botao = document.querySelector ('#btn')

const fundo = document.querySelector ('body')


botao.addEventListener('click', ()=>
{
    um = Number(notaum.value )
    dois = Number(notadois.value )
    tres = Number(notatres.value)

    media = (um + dois + tres)/3

    situacao = media >= 5 ? "aprovado" : "reprovado"

    if (media >= 5) {
        fundo.className = 'back'
    } else {
        fundo.className = 'aback'
    }

    resultado.textContent = `${pessoa.value} sua média foi ${media.toFixed(1)}, situação: ${situacao}`
})
