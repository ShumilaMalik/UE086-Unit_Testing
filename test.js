const chai = require('chai');
const expect = chai.expect;
const { toCelcius, toFahrenheit } = require('./app');

// Unit Test für die Umrechung Fahrenheit zu Grad Celsius
describe('toCelcius', () => {
    it('should convert positive Fahrenheit to Celcius', () => {
        expect(toCelcius(32)).to.equal(0);
    });

    it('should convert negative Fahrenheit to Celcius', () => {
        expect(toCelcius(-40)).to.equal(-40);
    });

    it('should return 100°C for 212°F', () => {
        expect(toCelcius(212)).to.equal(100);
    });

    it('should return the correct tempreature for a random number', () => {
        let fahrenheit = Math.floor(Math.random() * 42)
        let expected_temperature = (fahrenheit - 32) * 5 / 9;

        expect(toCelcius(fahrenheit)).to.equal(expected_temperature);
    });
});

// Unit Test für die Umrechung Grad Celsius zu Fahrenheit
describe('toFahrenheit', () => {
    it('should convert 0°C to 32°F', () => {
        expect(toFahrenheit(0)).to.equal(32);
    });

    it('should convert -40°C to -40°F', () => {
        expect(toFahrenheit(-40)).to.equal(-40);
    });

    it('should return 212°F for 100°C', () => {
        expect(toFahrenheit(100)).to.equal(212);
    });

    it('should return the correct fahrenheit for a random number', () => {
        let temperature = Math.floor(Math.random() * 42)
        let expected_fahrenheit = (temperature * 9 / 5) + 32;

        expect(toFahrenheit(temperature)).to.equal(expected_fahrenheit);
    });
});
