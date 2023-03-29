const lamp = document.querySelector('#lamp')
const body = document.querySelector('body')
const on = document.getElementById('on')
const off = document.getElementById('off')

const isLampBrokenDown = () => lamp.src.indexOf ('quebrada.png') > -1

function turnOn(){
    if (!isLampBrokenDown()){
    lamp.src='img/ligada.png'
    body.style.background = '#FFFEC1'
    }
}

function turnOff(){
   if (!isLampBrokenDown()){
    lamp.src='img/desligada.png'
    body.style.background = 'black'
     }
}

function lampBrokenDown(){
    lamp.src='img/quebrada.png'
    body.style.background = 'black'
}

on.addEventListener('click', turnOn)
off.addEventListener('click', turnOff)
lamp.addEventListener('mouseover', turnOn)
lamp.addEventListener('mouseleave', turnOff)
lamp.addEventListener('dblclick', lampBrokenDown)