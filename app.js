/*******************************************************************************
*
*   Umrechung von Grad Celsius in Grad Fahrenheit
*   siehe https://www.fahrenheit-umrechnen.de/
*
*******************************************************************************/

// Diese Funktion wandelt eine Temperatur von Fahrenheit in Celsius um
function toCelcius(fahrenheit) {
    // Die Formel zur Umrechnung von Fahrenheit in Celsius
    return (fahrenheit - 32) * 5 / 9;
}

// Diese Funktionwandelt eine Temperatur von Grad Celsius un Fahrenheit um
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

module.exports = {
    toCelcius,
    toFahrenheit
};
