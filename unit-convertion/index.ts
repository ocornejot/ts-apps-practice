import Converter from "./Converter";


const converter = new Converter();

console.log("Length");
console.log(converter.convertLength(1, "Meter", "Kilometer"));
console.log(converter.convertLength(1, "Centimeter", "Kilometer"));
console.log(converter.convertLength(1, "Kilometer", "Centimeter"));

console.log("Weight");
console.log(converter.convertWeight(1, "Pound", "Gram"));
console.log(converter.convertWeight(1, "Gram", "Kilogram"));
console.log(converter.convertWeight(1, "Kilogram", "Pound"));

console.log("Temperature");
console.log(converter.convertTemperature(1, "Celsius", "Fahrenheit"));
console.log(converter.convertTemperature(1, "Fahrenheit", "Celsius"));
console.log(converter.convertTemperature(1, "Celsius", "Kelvin"));

