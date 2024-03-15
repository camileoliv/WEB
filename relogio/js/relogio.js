const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const date = document.querySelector('#date')
const mes = document.querySelector('#mes')
const anos = document.querySelector('#anos')

const frase = document.querySelector('#frase')
const alvo = document.querySelector('img')

setInterval(relogio,1000)

function relogio(){
    let dia = new Date()

    let hr = dia.getHours()
    let min = dia.getMinutes()
    let sec = dia.getSeconds()
    let dd = dia.getDate()
    let mm = dia.getMonth() + 1 
    let aa = dia.getFullYear()

    if (hr<10){
        hr="0"+hr
    }

    if (min<10){
        min="0"+min
    }

    if (sec<10){
        sec="0"+sec
    }
    if (date<10){
        dd="0"+dd 
    }

    if (mm<10){
        mm="0"+mm 
    }

    //--------mudando a frase e a imagem

    if (hr>=5 && hr<12) {
        frase.textContent = 'Bom Dia'
        alvo.src = 'images/sun'
    } else if (hr>=12 && hr<18) {
       frase.textContent = 'Boa Tarde'
       alvo.src = 'images/sun'
    } else {
        frase.textContent = 'Boa Noite'
        alvo.src = 'images/moon.png'
    }

    //--------

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
    
    date.textContent = dd
    mes.textContent = mm
    anos.textContent = aa
}