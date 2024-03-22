var elem = document.querySelectorAll(".elem")

elem.forEach((val) => {
    val.addEventListener("mouseenter", () => {
        val.childNodes[3].style.opacity = "1"
    })
    val.addEventListener("mouseleave", () => {

        val.childNodes[3].style.opacity = "0"
    })
    val.addEventListener("mousemove", (details) => {
        val.childNodes[3].style.left = details.x + "px"

    })

});


// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", (details) => {
//     elemImage.style.left = details.x + "px"
//     elemImage.style.top = details.y + "px"
// })

// elem1.addEventListener("mouseenter", () => {
//     elemImage.style.opacity = 1
// })

// elem1.addEventListener("mouseleave", () => {
//     elemImage.style.opacity = 0
// })