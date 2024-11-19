import ConverterFactory from "./ConverterFactory";
import TemperatureConverter from "./TemperatureConverter";
import { WeightConverter } from "./WeightConverter";

let test = WeightConverter;
const converter = ConverterFactory.create(test);
console.log(converter);

let res = converter.convert(10, "Pound", "Kilogram");
console.log(res);