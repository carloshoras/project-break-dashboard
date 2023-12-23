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
        let characterType // Number 0 to 3 to see which type of character we get
        let characterIndex // Number from 0 to length to select a character
        let oneOfEachCharacters = false // To check if there is one of each types of characters
        //We check that it contains at least one character of each type
        while (!oneOfEachCharacters) {
            let checkOneOfEach = {}
            password = ""
            for (let i=0;i<inputPassword.value;i++) {
                characterType = Math.floor(Math.random() * 4)
                characterIndex = Math.floor(Math.random()*characters[characterType].length)
                password += characters[characterType][characterIndex] // Build the password
                checkOneOfEach[characterType] = 1 // We add one property to the object for each type added into the password.
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
        inputPassword.value = "12"
    }
})