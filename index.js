const fish = document.getElementById("dzuk")

const minX = 470
const maxX = 950
const minY = 204
const maxY = 474.787

fish.addEventListener("click",()=> {
    let x = randomNum(minX,maxX)
    let y = randomNum(minY,maxY)
    fish.style.left = x + "px"
    fish.style.bottom = y + "px"
} )


function randomNum(min,max) {
    return Math.floor(Math.random()*(max-min + 1)) + min

}