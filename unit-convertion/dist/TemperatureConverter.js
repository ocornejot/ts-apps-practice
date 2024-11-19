"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureEnum = void 0;
const Converter_1 = __importDefault(require("./Converter"));
var TemperatureEnum;
(function (TemperatureEnum) {
    TemperatureEnum["Celsius"] = "Celsius";
    TemperatureEnum["Fahrenheit"] = "Fahrenheit";
    TemperatureEnum["Kelvin"] = "Kelvin";
})(TemperatureEnum || (exports.TemperatureEnum = TemperatureEnum = {}));
var TemperatureValues;
(function (TemperatureValues) {
    TemperatureValues[TemperatureValues["Celsius"] = 1] = "Celsius";
    TemperatureValues[TemperatureValues["Fahrenheit"] = 1.8] = "Fahrenheit";
    TemperatureValues[TemperatureValues["Kelvin"] = 273.15] = "Kelvin";
})(TemperatureValues || (TemperatureValues = {}));
class TemperatureConverter extends Converter_1.default {
    convert(value, fromUnit, toUnit) {
        let result = this.convertToCelsius(value, fromUnit);
        return this.convertFromCelsius(result, toUnit);
    }
    convertToCelsius(value, fromUnit) {
        if (fromUnit === TemperatureEnum.Fahrenheit) {
            return (value - 32) * (5 / 9);
        }
        if (fromUnit === TemperatureEnum.Kelvin) {
            return value - 273.15;
        }
        return value;
    }
    convertFromCelsius(value, toUnit) {
        if (toUnit === TemperatureEnum.Fahrenheit) {
            return value * (9 / 5) + 32;
        }
        if (toUnit === TemperatureEnum.Kelvin) {
            return value + 273.15;
        }
        return value;
    }
}
exports.default = TemperatureConverter;
