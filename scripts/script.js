

//Atualiza o volume do tanque no supervisório
function updateVolFront(tanque, valor) {

    if (tanque == "simas/teste/tanques/t1/volume") {
        let t1 = document.getElementById("t1") || null;
        t1.textContent = valor + "%";
        let bar1 = document.getElementById("bar1") || null;
        bar1.style.height = valor + "%"

        let alturaTotal = 229.71457;
        let yBase = 43.709755 + alturaTotal;

        let altura = alturaTotal * valor;
        let y = yBase - altura;

        document.getElementById("v1").setAttribute("height", altura);
        document.getElementById("v1").setAttribute("y", y);
 

    }
    else if (tanque == "simas/teste/tanques/t2/volume") {
        let t2 = document.getElementById("t2") || null;
        t2.textContent = valor + "%";
        let bar2 = document.getElementById("bar2") || null;
        bar2.style.height = valor + "%"
    }
    else if (tanque == "simas/teste/tanques/t3/volume") {
        let t3 = document.getElementById("t3") || null;
        t3.textContent = valor + "%";
        let bar3 = document.getElementById("bar3") || null;
        bar3.style.height = valor + "%"
    }
    else if (tanque == "simas/teste/tanques/t4/volume") {
        let t4 = document.getElementById("t4") || null;
        t4.textContent = valor + "%";
        let bar4 = document.getElementById("bar4") || null;
        bar4.style.height = valor + "%"
    }
    else if (tanque == "simas/teste/tanques/t5/volume") {
        let t5 = document.getElementById("t5") || null;
        t5.textContent = valor + "%";
        let bar5 = document.getElementById("bar5") || null;
        bar5.style.height = valor + "%"
    }

}