"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterEnum = void 0;
var ConverterEnum;
(function (ConverterEnum) {
    ConverterEnum["Length"] = "Length";
    ConverterEnum["Weight"] = "Weight";
    ConverterEnum["Temperature"] = "TemperatureConverter";
})(ConverterEnum || (exports.ConverterEnum = ConverterEnum = {}));
class Converter {
    constructor() {
        this.value = 0;
        this.fromUnit = null;
        this.toUnit = null;
    }
}
exports.default = Converter;
