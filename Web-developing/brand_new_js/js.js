let random_number = Math.floor(Math.random() * 100)
let attemps = 0
function check_guess(){
    let user_guess = Number(document.getElementById("user_guess").value)
    attemps += 1
    if (user_guess === random_number) {
        document.getElementById("hint").innerText = "Congratulations!"
        document.getElementById("attemps").innerText = `Attemps: ${attemps}.`
    }
    else if (user_guess > random_number) {
        document.getElementById("hint").innerText = "Too big!"
        document.getElementById("attemps").innerText = `Attemps: ${attemps}.`
    }
    else if (user_guess < random_number) {
        document.getElementById("hint").innerText = "Too small!"
        document.getElementById("attemps").innerText = `Attemps: ${attemps}.`
    }
}

let taps = 0
function croci(){
    taps += 1
    document.getElementById("taps").innerText = `${taps}`
}