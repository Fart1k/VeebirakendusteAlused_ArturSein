function nimiLugemine() {
    let nimi = document.getElementById("eesnimi")
    let perenimi = document.getElementById("perenimi")
    let vastus = document.getElementById("vastus")

    vastus.innerHTML = "Tere, " + nimi.value + " " + perenimi.value;
}

function vanuseLugemine() {
    date = document.getElementById("sünnikuupäev")
    let vastus2 = document.getElementById("vastus2")

    vastus2.innerHTML = "Sa sündisid: " + date.valueAsDate
}

function suguValik() {
    let naine = document.getElementById("naine")
    let mees = document.getElementById("mees")
    let muu = document.getElementById("muu")
    let vastus3 = document.getElementById("vastus3")

    if (naine.checked) {
        vastus3.innerHTML = "Sa oled naine"
    }
    else if (mees.checked) {
        vastus3.innerHTML = "Sa oled mees"
    }
    else if (muu.checked) {
        vastus3.innerHTML = "Ok"
    }
}

function epostiLugemine() {
    let epost = document.getElementById("epost")
    let vastus4 = document.getElementById("vastus4")

    vastus4.innerHTML = "Sinu e-post on: " + epost.value
}

function telefoniLugemine() {
    let telefon = document.getElementById("telefon")
    let vastus5 = document.getElementById("vastus5")

    vastus5.innerHTML = "Sinu telefon on: " + telefon.value
}