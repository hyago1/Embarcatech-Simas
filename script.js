// Crie uma instância do cliente globalmente
var client = null;

// Coloque toda a lógica de conexão dentro da função de inicialização
window.onload = function () {
    // Agora crie o cliente e inicie a conexão.
    // Isso garante que a biblioteca Paho já foi carregada.
    client = new Paho.Client("test.mosquitto.org", 8080, "clientId");

    var options = {

        onSuccess: onConnect,
        onFailure: onFailure
    };

    client.connect(options);

    // Defina os callbacks AQUI, depois que o cliente for criado
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

};





// As funções de callback podem permanecer aqui fora
function onFailure(responseObject) {
    console.log("Falha na conexão: " + responseObject.errorMessage);
}




function onConnect() {
    console.log("Conectado ao broker MQTT!");
    client.subscribe("simas/teste/tanques/#");



}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}



function onMessageArrived(message) {
    console.log("onMessageArrived:" + message.destinationName);

    updateVolFront(message.destinationName, message.payloadString)
}


//Atualiza o volume do tanque no supervisório
function updateVolFront(tanque, valor) {

    if (tanque == "simas/teste/tanques/t1/volume") {
        let t1 = document.getElementById("t1");
        t1.textContent = valor + "%";
        let bar1 = document.getElementById("bar1");
        bar1.style.height = valor + "%"

    }
    else if (tanque == "simas/teste/tanques/t2/volume") {
        let t2 = document.getElementById("t2");
        t2.textContent = valor + "%";
        let bar2 = document.getElementById("bar2");
        bar2.style.height = valor + "%"

    }
    else if (tanque == "simas/teste/tanques/t3/volume") {
        let t3 = document.getElementById("t3");
        t3.textContent = valor + "%";
        let bar3 = document.getElementById("bar3");
        bar3.style.height = valor + "%"

    }
    else if (tanque == "simas/teste/tanques/t4/volume") {
        let t4 = document.getElementById("t4");
        t4.textContent = valor + "%";
        let bar4 = document.getElementById("bar4");
        bar4.style.height = valor + "%"

    }
    else if (tanque == "simas/teste/tanques/t5/volume") {
        let t5 = document.getElementById("t5");
        t5.textContent = valor + "%";
        let bar5 = document.getElementById("bar5");
        bar5.style.height = valor + "%"

    }

}