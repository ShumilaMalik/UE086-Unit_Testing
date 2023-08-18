// Diese Funktion wandelt eine Temperatur von Fahrenheit in Celsius um
function toCelcius(fahrenheit) {
    // Die Formel zur Umrechnung von Fahrenheit in Celsius
    return (fahrenheit - 32) * 5 / 9;
}

// Exportiere die Funktion, um sie in anderen Dateien verwenden zu können
module.exports = {
    toCelcius
};


//Funktion zur Fahrenheit hinzufgen

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

module.exports = {
    toCelcius,
    toFahrenheit
};
