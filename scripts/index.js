


//Atualiza o volume do tanque no supervisório
function updateVolFront(tanque, valor) {

    if (tanque == "simas/teste/tanques/t1/volume") {
        animar(230,valor, 44,"v1", "tspan1")
    }
    else if (tanque == "simas/teste/tanques/t2/volume") {
         animar(230,valor, 44,"v2", "tspan2")
    }
    else if (tanque == "simas/teste/tanques/t3/volume") {
        animar(230,valor, 44,"v3", "tspan3")
    }
    else if (tanque == "simas/teste/tanques/t4/volume") {
        animar(230,valor, 500,"v4", "tspan4")
    }
    else if (tanque == "simas/teste/tanques/t5/volume") {
        animar(230,valor, 500,"v5", "tspan5")
    }
    

}

function animar(a, valor, y, tanque, textvol){
        let alturaTotal = a;
        let yBase = y + alturaTotal;
        let altura = alturaTotal * valor/100;
        let newY = yBase - altura;
        console.log(newY);
        console.log(altura);
        
        document.getElementById(tanque).setAttribute("height", altura);
        document.getElementById(tanque).setAttribute("y", newY);
        document.getElementById(textvol).textContent = valor+"%"
        document.getElementById(tanque).style.transition = "1s"
}
