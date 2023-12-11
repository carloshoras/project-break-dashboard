//RELOJ 24H
const watch = document.querySelector(".watch")

function pintaHoraFecha () {
    let fecha = new Date()
    watch.innerHTML = `
    <p class="time">${fecha.getHours().toString().padStart(2,'0')}:${fecha.getMinutes().toString().padStart(2,'0')}:${fecha.getSeconds().toString().padStart(2,'0')}</p>
    <p class="date">${fecha.getDate().toString().padStart(2,'0')}/${(fecha.getMonth()+1).toString().padStart(2,'0')}/${fecha.getFullYear()}</p>`
}  

pintaHoraFecha()
setInterval(pintaHoraFecha, 1000)


//GENERADOR CONTRASEÑAS
const buttonPassword = document.querySelector(".inputPassword button")
const inputPassword = document.querySelector(".inputPassword input")
const generatedPassword = document.querySelector(".generatedPassword")

const characters = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%^&*()-_=+"
    ]

buttonPassword.addEventListener('click', function () {
    if (inputPassword.value > 11 && inputPassword.value < 51) {
        let password = ""
        let characterType
        let characterNumber
        for (let i=0;i<inputPassword.value;i++) {
            characterType = Math.floor(Math.random() * 4)
            characterNumber = Math.floor(Math.random()*characters[characterType].length)
            password += characters[characterType][characterNumber]
        }
        generatedPassword.innerHTML = `
        <p>Contraseña Generada:</p>
        <p>${password}</p>`
    } else {
        alert("Mete un numero correcto")
    }
})
// -capturar boton
// -addeventlistener al boton --> coge valor Input
// ---si numero sale de rangoo , alerta por pantalla

// -creamos elemento dentro del div que vaya al final, ahi metermos innerHTML
// -mayusculas/minusculsa/numeros/simbolos

// -pintamos con innerhtml