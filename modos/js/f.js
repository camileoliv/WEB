const day = document.querySelector ('#dia')
const night = document.querySelector ('#noite')
const central = document.querySelector ('body')

day.addEventListener ('click', ligar)
night.addEventListener ('click', desligar)

function ligar() {
    central.className = 'diaPront'
}

function desligar() {
    central.className = 'noitePront'
}