const watch = document.querySelector(".watch")
const nameFileHtml = location.pathname.split("/")[nameFileHtml.length-1] // We get the html attached to the execution of the script

function sentenceHour(hour) {
    if (hour>0 && hour<7) return "Es hora de descansar. Apaga y sigue mañana"
    if (hour>=7 && hour<12) return "Buenos días, desayuna fuerte y a darle al código"
    if (hour>=12 && hour<14) return "Echa un rato más pero no olvides comer"
    if (hour>=14 && hour<16) return "Espero que hayas comido"
    if (hour>=16 && hour<18) return "Buenas tardes, el último empujón"
    if (hour>=18 && hour<22) return "Esto ya son horas extras, ... piensa en parar pronto"
    if (hour>=22 && hour<=23) return "Buenas noches, es hora de pensar en parar y descansar"
}

function pintaHoraFecha () {
    let fecha = new Date()
    let timeDateHtml = `
    <p class="time">${fecha.getHours().toString().padStart(2,'0')}:${fecha.getMinutes().toString().padStart(2,'0')}:${fecha.getSeconds().toString().padStart(2,'0')}</p>
    <p class="date">${fecha.getDate().toString().padStart(2,'0')}/${(fecha.getMonth()+1).toString().padStart(2,'0')}/${fecha.getFullYear()}</p>`
    //If we are in the watch dedicated page --> Include an intro and motivational sentence
    if (nameFileHtml === "index.html" || nameFileHtml === "") {
        watch.innerHTML = timeDateHtml
    } else {
        watch.innerHTML = "<span>Son las...</span>" + timeDateHtml + `<span>${sentenceHour(fecha.getHours())}</span>`
    }
}  

//Initial call so as not to wait 1 second
pintaHoraFecha()
//We refresh the time/date every second
setInterval(pintaHoraFecha, 1000)