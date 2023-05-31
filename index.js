let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

homeScoreEl.textContent = 0
guestScoreEl.textContent = 0

function highlightWinner() {
    let homeScore = parseInt(homeScoreEl.textContent)
    let guestScore = parseInt(guestScoreEl.textContent)
    if (homeScore > guestScore) {
        document.getElementById("home").style.textShadow = "0px 0px 10px green"
        document.getElementById("guest").style.textShadow = "0px 0px"
    } else if (homeScore < guestScore) {
        document.getElementById("guest").style.textShadow = "0px 0px 10px green"
        document.getElementById("home").style.textShadow = "0px 0px"
    } else {
        document.getElementById("home").style.textShadow = "0px 0px"
        document.getElementById("guest").style.textShadow = "0px 0px"
    }
}

function showButton(id, team) {
    let incrementAmount = parseInt([...id.innerHTML][1])
    let scoreEl = document.getElementById(team + "-score")
    let score = parseInt(scoreEl.textContent)
    scoreEl.textContent = score + incrementAmount
    highlightWinner()
}

function newGame() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    document.getElementById("home").style.textShadow = "0px 0px"
    document.getElementById("guest").style.textShadow = "0px 0px"
}

// document.getElementById("home").style.color = "green"

