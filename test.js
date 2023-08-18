const chai = require('chai');
const expect = chai.expect;
const { toCelcius, toFahrenheit } = require('./app');


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
});

//Unit Test für Fahrenheit
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
});
