"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConverterFactory_1 = __importDefault(require("./ConverterFactory"));
const WeightConverter_1 = require("./WeightConverter");
let test = WeightConverter_1.WeightConverter;
const converter = ConverterFactory_1.default.create(test);
console.log(converter);
let res = converter.convert(10, "Pound", "Kilogram");
console.log(res);
