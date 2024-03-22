var iStatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var check = 0

addFriend.addEventListener("click", () => {
    if (check == 0) {
        iStatus.innerHTML = "Friends"
        iStatus.style.color = "Green"
        addFriend.innerHTML = "Remove Friend"
        addFriend.style.color = "#111"
        addFriend.style.background = "#dadada"
        check = 1
    } else {
        iStatus.innerHTML = "Stranger"
        iStatus.style.color = "Red"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.color = "#fff"
        addFriend.style.background = "cadetblue"
        check = 0
    }
})