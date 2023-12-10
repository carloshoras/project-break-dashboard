const watch = document.querySelector(".reloj")

function pintaHoraFecha () {
    let fecha = new Date()
    watch.innerHTML = `
    <div class="hora">
        <p>${fecha.getHours().toString().padStart(2,'0')}:${fecha.getMinutes().toString().padStart(2,'0')}:${fecha.getSeconds().toString().padStart(2,'0')}</p>
    </div>
    <div class="fecha">
        <p>${fecha.getDate().toString().padStart(2,'0')}/${(fecha.getMonth()+1).toString().padStart(2,'0')}/${fecha.getFullYear()}</p>
    </div>`
}  

pintaHoraFecha()
setInterval(pintaHoraFecha, 1000)

