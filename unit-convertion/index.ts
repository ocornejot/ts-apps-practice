import ConverterFactory from "./ConverterFactory";
import TemperatureConverter from "./TemperatureConverter";
import WeightConverter from "./WeightConverter";
import LengthConverter from "./LengthConverter";

const converter1 = ConverterFactory.create(LengthConverter);
console.log('LengthConverter', converter1.convert(10000, "Meter", "Kilometer"));


const converter2 = ConverterFactory.create(WeightConverter);
console.log('WeightConverter', converter2.convert(20, "Kilogram", "Pound"));

const converter3 = ConverterFactory.create(TemperatureConverter);
console.log('TemperatureConverter', converter3.convert(15, "Celsius", "Fahrenheit"));