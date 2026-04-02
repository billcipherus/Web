let password = "qwerty123"
let adminPassword = "admin"
let nunclearPassword = "GOYDAAA ZOV"

function allScript() {
    let userPassword = document.getElementById("input").value
    console.log(userPassword)
    if (userPassword === password) {
        document.getElementById("answer").textContent = "Welcome back, user!"
    }
    else if (userPassword === adminPassword) {
        document.getElementById("answer").textContent = "Welcome back, admin!"
    }
    else if (userPassword === nunclearPassword) {
        document.getElementById("answer").textContent = "Access to the Russian nuclear system is allowed."
    }
    else {
        document.getElementById("answer").textContent = "Wrong password. Please, try again."
    }
}