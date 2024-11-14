"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LengthValues;
(function (LengthValues) {
    LengthValues[LengthValues["Meter"] = 1] = "Meter";
    LengthValues[LengthValues["Kilometer"] = 1000] = "Kilometer";
    LengthValues[LengthValues["Inch"] = 0.0254] = "Inch";
    LengthValues[LengthValues["Foot"] = 0.3048] = "Foot";
    LengthValues[LengthValues["Centimeter"] = 0.01] = "Centimeter";
    LengthValues[LengthValues["Millimeter"] = 0.001] = "Millimeter";
    LengthValues[LengthValues["Miles"] = 1609.34] = "Miles";
})(LengthValues || (LengthValues = {}));
var WeightValues;
(function (WeightValues) {
    WeightValues[WeightValues["Kilogram"] = 1] = "Kilogram";
    WeightValues[WeightValues["Gram"] = 0.001] = "Gram";
    WeightValues[WeightValues["Pound"] = 0.453592] = "Pound";
})(WeightValues || (WeightValues = {}));
var TemperatureValues;
(function (TemperatureValues) {
    TemperatureValues[TemperatureValues["Celsius"] = 1] = "Celsius";
    TemperatureValues[TemperatureValues["Fahrenheit"] = 1.8] = "Fahrenheit";
    TemperatureValues[TemperatureValues["Kelvin"] = 273.15] = "Kelvin";
})(TemperatureValues || (TemperatureValues = {}));
class Converter {
    constructor() {
        this.value = 0;
        this.type = null;
        this.fromUnit = null;
        this.toUnit = null;
    }
    convertLength(value, fromUnit, toUnit) {
        return value * LengthValues[fromUnit] / LengthValues[toUnit];
    }
    convertWeight(value, fromUnit, toUnit) {
        return value * WeightValues[fromUnit] / WeightValues[toUnit];
    }
    convertTemperature(value, fromUnit, toUnit) {
        let baseConvertion = value;
        if (fromUnit === 'Fahrenheit') {
            baseConvertion = (value - 32) * (5 / 9);
        }
        if (fromUnit === 'Kelvin') {
            baseConvertion = value - 273.15;
        }
        if (toUnit === 'Fahrenheit') {
            baseConvertion = baseConvertion * (9 / 5) + 32;
        }
        if (toUnit === 'Kelvin') {
            baseConvertion = baseConvertion + 273.15;
        }
        return baseConvertion;
    }
}
exports.default = Converter;
