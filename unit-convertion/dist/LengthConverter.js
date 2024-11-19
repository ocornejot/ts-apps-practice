"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LengthEnum = void 0;
const Converter_1 = __importDefault(require("./Converter"));
var LengthEnum;
(function (LengthEnum) {
    LengthEnum["Meter"] = "Meter";
    LengthEnum["Kilometer"] = "Kilometer";
    LengthEnum["Inch"] = "Inch";
    LengthEnum["Foot"] = "Foot";
    LengthEnum["Centimeter"] = "Centimeter";
    LengthEnum["Millimeter"] = "Millimeter";
    LengthEnum["Miles"] = "Miles";
})(LengthEnum || (exports.LengthEnum = LengthEnum = {}));
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
class LengthConverter extends Converter_1.default {
    convert(value, fromUnit, toUnit) {
        return value * LengthValues[fromUnit] / LengthValues[toUnit];
    }
}
exports.default = LengthConverter;
