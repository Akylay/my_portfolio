const hamb = document.querySelector(".hamb")
const popup = document.querySelector(".popup")
const body = document.querySelector("body")



hamb.addEventListener("click", hambHandler)

function hambHandler(e) {
    e.preventDefault()
    popup.classList.toggle("open")
    hamb.classList.toggle("active")
    body.classList.toggle("noscroll")
}

