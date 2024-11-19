"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterEnum = void 0;
var ConverterEnum;
(function (ConverterEnum) {
    ConverterEnum["Length"] = "Length";
    ConverterEnum["Weight"] = "Weight";
    ConverterEnum["Temperature"] = "TemperatureConverter";
})(ConverterEnum || (exports.ConverterEnum = ConverterEnum = {}));
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
class Converter {
    constructor() {
        this.value = 0;
        this.fromUnit = null;
        this.toUnit = null;
    }
}
exports.default = Converter;
