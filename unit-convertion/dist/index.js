"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConverterFactory_1 = __importDefault(require("./ConverterFactory"));
const TemperatureConverter_1 = __importDefault(require("./TemperatureConverter"));
const WeightConverter_1 = __importDefault(require("./WeightConverter"));
const LengthConverter_1 = __importDefault(require("./LengthConverter"));
const converter1 = ConverterFactory_1.default.create(LengthConverter_1.default);
console.log('LengthConverter', converter1.convert(10000, "Meter", "Kilometer"));
const converter2 = ConverterFactory_1.default.create(WeightConverter_1.default);
console.log('WeightConverter', converter2.convert(20, "Kilogram", "Pound"));
const converter3 = ConverterFactory_1.default.create(TemperatureConverter_1.default);
console.log('TemperatureConverter', converter3.convert(15, "Celsius", "Fahrenheit"));
