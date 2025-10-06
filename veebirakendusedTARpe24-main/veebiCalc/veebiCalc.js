
function piltmyistatus() {
    let vastus = document.getElementById('vastus');
    let pilt = document.getElementById('pilt');
    let v1 = document.getElementById('v1');
    let v2 = document.getElementById('v2');
    let v3 = document.getElementById('v3');
    let v4 = document.getElementById('v4');
    let v5 = document.getElementById('v5');

    if(v1.checked) {
        vastus.innerHTML = 'See on 1. teenus. Hind - 1 euro'
        pilt.src = 'images/1.png'
    }
    else if(v2.checked) {
        vastus.innerHTML = 'See on 2. teenus. Hind - 2 euro'
        pilt.src = 'images/2.png'
    }
    else if(v3.checked) {
        vastus.innerHTML = 'See on 3. teenus. Hind - 3.3 euro'
        pilt.src = 'images/3.png'
    }
    else if(v4.checked) {
        vastus.innerHTML = 'See on 4. teenus. Hind - 4 euro'
        pilt.src = 'images/4.png'
    }
    else if(v5.checked) {
        vastus.innerHTML = 'See on 5. teenus. Hind - 5.8 euro'
        pilt.src = 'images/5.png'
    }
}
function arvuta(kogus, hind) {
    return (kogus * hind).toFixed(2);
    //toFixed - ümardab 2 numbri peale koma
}
const  pilt1Hind = 1;
const  pilt2Hind = 2;
const  pilt3Hind = 3.3;
const  pilt4Hind = 4;
const  pilt5Hind = 5.8;
function arvutaPiltHind() {
    let vastus2 = document.getElementById('vastus2');
    let tk = document.getElementById('tk');
    let v1 = document.getElementById('v1');
    let v2 = document.getElementById('v2');
    let v3 = document.getElementById('v3');
    let v4 = document.getElementById('v4');
    let v5 = document.getElementById('v5');

    if(v1.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt1Hind) + '€'
    }
    else if(v2.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt2Hind) + '€'
    }
    else if(v3.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt3Hind) + '€'
    }
    else if(v4.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt4Hind) + '€'
    }
    else if(v5.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt5Hind) + '€'
    }
}