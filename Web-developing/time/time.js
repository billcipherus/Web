function allScript() {
    let userTime = document.getElementById("input").value
    console.log(userTime)
    if (userTime < 6) {
        document.getElementById("answer").textContent = "HEY, WTH ARE U DOIN, DUDE?!"
    }
    else if (6 <= userTime && userTime < 12) {
        document.getElementById("answer").textContent = "Good morning, Vietnam!"
    }
    else if (12 <= userTime && userTime < 18) {
        document.getElementById("answer").textContent = "WORK!!!"
    }
    else if (18 <= userTime && userTime < 24) {
        document.getElementById("answer").textContent = "Sleep"
    }
    else {
        document.getElementById("answer").textContent = "ARE U FROM ANOTHERS UNIVERSE OR SMTH?!?!?!"
    }
}