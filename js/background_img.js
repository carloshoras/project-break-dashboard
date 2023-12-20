document.body.style.backgroundImage = "url('./assets/img/bridge.webp')";

const backgroundImages = [
    "./assets/img/bridge.webp",
    "./assets/img/canon.webp",
    "./assets/img/desert.webp",
    "./assets/img/eclipse.webp",
    "./assets/img/forrest-fog.webp",
    "./assets/img/forrest.webp",
    "./assets/img/forrest2.webp",
    "./assets/img/antler.webp",
    "./assets/img/mountain-sky.webp",
    "./assets/img/mountains.webp",
    "./assets/img/space-sky.webp",
    "./assets/img/octopus.webp",
    "./assets/img/snow.webp"
    ]

let copybackgroundImages = [...backgroundImages]

//Change the bg image and don't repeat the same one until all have appeared
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