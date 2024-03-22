var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", (details) => {
    crsr.style.left = details.x + "PX"
    crsr.style.top = details.y + "PX"

})