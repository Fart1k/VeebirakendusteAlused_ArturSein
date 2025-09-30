function nimiLugemine() {
    //let - muutuja määramine
    let nimi = document.getElementById("nimi");
    let vastus = document.getElementById("vastus");

    //genereerime innerHTML teksti dokumentis
    vastus.innerHTML = "Tere, " + nimi.value;
}
function puhasta() {
    let nimi = document.getElementById("nimi");
    let vastus = document.getElementById("vastus");
    let vastus2 = document.getElementById("vastus2");

    //genereerime innerHTML teksti dokumentis
    vastus.innerHTML = "Vastusekoht";
    nimi.value = "";
    vastus2.style.backgroundColor = "white";
}
function varvLugemine() {
    let varv = document.getElementById("varv");
    let vastus2 = document.getElementById("vastus2");

    vastus2.style.backgroundColor = varv.value;
}
function radioValik() {
    let naerata = document.getElementById("naerata");
    let kurvasta = document.getElementById("kurvasta");
    let pilt = document.getElementById("pilt");
    let vastus3 = document.getElementById("vastus3");

    if(naerata.checked) {
        pilt.src = "images/rõõmus.png";
        vastus3.innerText = "Naerata siis!";
        vastus3.style.color = "green";
    }
    else if (kurvasta.checked) {
        pilt.src = "images/kurb.png"
        vastus3.innerText = "Nutta!";
        vastus3.style.color = "red";
    }
    else {
        pilt.src = ""
        vastus3.innerText = "Tee oma valik";
        vastus3.style.color = "black";
    }
}
function tujuSlider() {
    let tuju = document.getElementById("tuju");
    let vastus4 = document.getElementById("vastus4");

    if (tuju.value <= 30) {
        vastus4.innerHTML ="Tuju slider näitab: " + tuju.value + "<br>Sa oled kurb";
    }
    else if (tuju.value <= 70) {
        vastus4.innerHTML ="Tuju slider näitab: " + tuju.value + "<br>Sa oled normaalne";
    }
    else {
        vastus4.innerHTML ="Tuju slider näitab: " + tuju.value + "<br>Sa oled rõõmus";
    }
}
function kooliValik() {
    let vastus5 = document.getElementById("vastus5");
    let kool = document.getElementById("kool");

    //selectedIndex, 1 rida on null rida
    if (kool.selectedIndex !== 0) {
        vastus5.innerHTML = "Sinu unistuse kool on " + kool.value;
    }
    else {
        vastus5.innerHTML = "Tee oma valik";
    }
}