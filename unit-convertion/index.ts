import ConverterFactory from "./ConverterFactory";
import TemperatureConverter from "./TemperatureConverter";

let test = TemperatureConverter;
const converter = ConverterFactory.create(test);
console.log(converter);

let res = converter.convert(50, "Fahrenheit", "Celsius");
console.log(res);



// converterFactory.convert(ConverterEnum.Temperature, 1, "Celsius", "Fahrenheit");


// const converter = new Converter();

// console.log("Length");
// console.log(converter.convertLength(1, "Meter", "Kilometer"));
// console.log(converter.convertLength(1, "Centimeter", "Kilometer"));
// console.log(converter.convertLength(1, "Kilometer", "Centimeter"));

// console.log("Weight");
// console.log(converter.convertWeight(1, "Pound", "Gram"));
// console.log(converter.convertWeight(1, "Gram", "Kilogram"));
// console.log(converter.convertWeight(1, "Kilogram", "Pound"));

// console.log("Temperature");
// console.log(converter.convertTemperature(1, "Celsius", "Fahrenheit"));
// console.log(converter.convertTemperature(1, "Fahrenheit", "Celsius"));
// console.log(converter.convertTemperature(1, "Celsius", "Kelvin"));

// console.log(converter.convert(1, "Celsius", "Fahrenheit"));
// console.log(converter.convert(1, "Fahrenheit", "Celsius"));
// console.log(converter.convert(1, "Celsius", "Kelvin"));