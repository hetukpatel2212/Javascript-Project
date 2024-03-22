const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((details) => {
        var div = document.createElement("div")
        div.classList.add("imageDiv")
        div.style.left = details.clientX + "px"
        div.style.top = details.clientY + "px"

        var img = document.createElement("img")
        img.setAttribute("src", "https://img.freepik.com/free-photo/beautiful-countryside-road-greenery-forests_181624-5399.jpg?t=st=1710329647~exp=1710333247~hmac=c28e9936f8745e5ef78ed298f4286bc5cc586c4acb118a25f146f3c12d2ef8df&w=360")
        div.appendChild(img)
        document.body.append(div)

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .2,
        })

        gsap.to(img, {
            y: "100%",
            delay: .3,
            ease: Power2,
            duration: .5,
        })
        setTimeout(() => {
            div.remove();
        }, 1000);
    }, 200));