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
        let password
        let characterType
        let characterIndex
        let oneOfEachCharacters = false
        //We check that it contains at least one character of each type
        while (!oneOfEachCharacters) {
            let checkOneOfEach = {}
            password = ""
            for (let i=0;i<inputPassword.value;i++) {
                characterType = Math.floor(Math.random() * 4)
                characterIndex = Math.floor(Math.random()*characters[characterType].length)
                password += characters[characterType][characterIndex]
                checkOneOfEach[characterType] = 1
            }
            //If the object 'checkOneOfEach' doesn't have 4 positions (one per type), repeat the process.
            if (Object.keys(checkOneOfEach).length == 4) {
                oneOfEachCharacters = true
            }
        }
        //We paint the password
        generatedPassword.innerHTML = `
        <p>Contraseña Generada:</p>
        <p>${password}</p>`
    } else {
        alert("Introduce un numero entre 12 y 50")
    }
})

////LISTADO DE LINKS
const buttonAddUrl = document.querySelector(".inputLink button")
const nameUrl = document.querySelector(".nameUrl")
const url = document.querySelector(".url")
const savedLinks = document.querySelector(".savedLinks")

buttonAddUrl.addEventListener('click', function () {
    console.log(nameUrl)
    if (localStorage.getItem(nameUrl.value)) {
        alert("Ya existe una url guardada con este mismo nombre")
    } else if (localStorage.getItem(nameUrl.value) === url.value) {
        alert("Esta url ya esta guardada con otro nombre")
    } else {
        localStorage.setItem((nameUrl.value),url.value)
        savedLinks.innerHTML += `
        <div id="${nameUrl.value}">
            <button>X</button>
            <a href="${url.value}">${nameUrl.value}</a>
        </div>`
    }
})
// -boton añadirenlace addeventlistener
// ---comprobar si link ya existe alerta "ya guardaste"
// ---local storage set item nombre : URL
// ---pintar en el div "savedlinks" con un <a href> y con boton de eliminar

// queryselectorall(todos los enlaces guardados)
// queryselectorAll(todos los botones elimnar)
// foreach --> addeventlistener --> con index teenemos el elemento y lo eliminamos
// -->Eliminamos tambien del local storage a traves de un id="nombre" en el elemento?