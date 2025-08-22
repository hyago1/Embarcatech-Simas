// Crie uma instância do cliente globalmente
var client = null;

// Coloque toda a lógica de conexão dentro da função de inicialização
window.onload = function() {
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
    client.subscribe("hyago/testes/");
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
    }
}

function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
}