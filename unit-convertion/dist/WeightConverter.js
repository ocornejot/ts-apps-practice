"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightConverter = exports.WeightEnum = void 0;
const Converter_1 = __importDefault(require("./Converter"));
var WeightEnum;
(function (WeightEnum) {
    WeightEnum["Kilogram"] = "Kilogram";
    WeightEnum["Gram"] = "Gram";
    WeightEnum["Pound"] = "Pound";
})(WeightEnum || (exports.WeightEnum = WeightEnum = {}));
var WeightValues;
(function (WeightValues) {
    WeightValues[WeightValues["Kilogram"] = 1] = "Kilogram";
    WeightValues[WeightValues["Gram"] = 0.001] = "Gram";
    WeightValues[WeightValues["Pound"] = 0.453592] = "Pound";
})(WeightValues || (WeightValues = {}));
class WeightConverter extends Converter_1.default {
    convert(value, fromUnit, toUnit) {
        return value * WeightValues[fromUnit] / WeightValues[toUnit];
    }
}
exports.WeightConverter = WeightConverter;
