document.body.style.backgroundImage = "url('./assets/img/bridge.jpg')";

const backgroundImages = [
    "./assets/img/bridge.jpg",
    "./assets/img/canon.jpg",
    "./assets/img/desert.jpg",
    "./assets/img/eclipse.jpg",
    "./assets/img/forrest-fog.jpg",
    "./assets/img/forrest.jpg",
    "./assets/img/forrest2.jpg",
    "./assets/img/antler.jpg",
    "./assets/img/mountain-sky.jpg",
    "./assets/img/mountains.jpg",
    "./assets/img/space-sky.jpg",
    "./assets/img/octopus.jpg",
    "./assets/img/snow.jpg"
    ]

let copybackgroundImages = [...backgroundImages]

//Change the bg image and don't repeat the same until all have appeared
function changeImgBackground() {
    if (copybackgroundImages.length === 0) {
        copybackgroundImages = [...backgroundImages]
    }
    let indexSelectedImg = Math.floor(Math.random()*copybackgroundImages.length)
    let selectedImg = copybackgroundImages[indexSelectedImg]
    copybackgroundImages.splice(indexSelectedImg, 1)
    document.body.style.backgroundImage = `url('${selectedImg}')`;
}

changeImgBackground()
setInterval(changeImgBackground, 15000)