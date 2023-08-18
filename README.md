# UE086-Unit_Testing

## Lösung zur praktischen Aufgabe


### Ziel der Aufgabe
Das Ziel dieser Aufgabe ist es, Node.js in Kombination mit [Mocha](https://mochajs.org/) und [Chai](https://www.chaijs.com/) zu nutzen, um eine einfache
Programmieraufgabe zu lösen und dabei Unit Tests zu schreiben.

### Aufgabenstellung
Implementiere eine Funktion namens `toCelcius` , die eine Zahl (Temperatur in Fahrenheit) als Parameter erhält
und diese in eine Temperatur in Grad Celcius umwandelt. 
Schreibe Unit Tests mit Mocha und Chai, um sicherzustellen, dass die Funktion korrekt ausgeführt und verschiedene Testfälle abdeckt.

### Anforderungen
* Erstelle ein neues Projektverzeichnis und initialisiere ein npm-Projekt.
* Installiere Mocha und Chai als Entwicklerabhängigkeiten in deinem Projekt.
* Erstelle eine JavaScript-Datei (z.B. `app.js`) und implementiere die Funktion `toCelcius`.
* Schreibe mindestens **drei** Unit Tests, um verschiedene Szenarien abzudecken:
  * positive Zahlen
  * negative Zahlen
  * Zufällige Zahl mit dem passenden Ergebnis
  * Null 
  * ...
* Führe die Unit Tests mit Mocha aus und stelle sicher, dass alle Testfälle erfolgreich bestanden werden.
* Erstelle nun auch eine Funktion `toFahrenheit` die eine Grad Celcius Temperatur in eine Fahrenheit umwandelt.
* Füge auch bei dieser neuen Funktion mindestens **drei** Unit Tests hinzu, welche die gleichen Szenarien abdeckt.

### Setup

```bash
git clone https://github.com/ShumilaMalik/UE086-Unit_Testing.git
npm install
npm test
```

### Hinweis

Du kannst die Testdatei `test.js` ausführen, indem du den Befehl `npx mocha` oder `npm test` in der Befehlszeile eingibst und ausführst

