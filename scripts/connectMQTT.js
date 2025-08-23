// Cria uma instância do cliente globalmente
var client = null;

window.onload = function () {

    client = new Paho.Client("test.mosquitto.org", 8080, "clientId");

    var options = {

        onSuccess: onConnect,
        onFailure: onFailure
    };

    client.connect(options);

    //callbacks
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

};


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
