const buttonAddUrl = document.querySelector(".inputLink button")
const nameUrl = document.querySelector(".nameUrl")
const url = document.querySelector(".url")
const savedLinks = document.querySelector(".savedLinks")
const links = JSON.parse(localStorage.getItem("links")) || {}


paintLinks()

//Paint all links saved in localStorage
function paintLinks () {
    nameUrl.value = ""
    url.value = ""
    savedLinks.innerHTML = ""
    for (let linkName in links) {
        savedLinks.innerHTML += `
        <div id="${linkName}">
            <button>X</button>
            <a href="${links[linkName]}">${linkName}</a>
        </div>`
    }
    addCloseButtonEvent()
}

//Give functionality to the 'X' button of each saved link
function addCloseButtonEvent () {
    //list of 'X' buttons
    const closeButtons = document.querySelectorAll('.savedLinks button')
    //list of saved links
    const linkCards = document.querySelectorAll('.savedLinks div')
    closeButtons.forEach(function (button, index) {
        button.addEventListener('click', function() {
            //Delete that link from the object, update it and paint the new one.
            delete links[linkCards[index].id]
            localStorage.setItem("links", JSON.stringify(links))
            paintLinks()
        })
    })
}

//Save new link entry
buttonAddUrl.addEventListener('click', function () {
    if (links[nameUrl.value]) {
        alert("Ya existe una url guardada con este nombre")
    } else if (nameUrl.value === "" || url.value === "") {
        alert("Uno de los campos está vacío")
    } else {
        links[nameUrl.value] = url.value
        localStorage.setItem("links", JSON.stringify(links))
        paintLinks()
    }
})