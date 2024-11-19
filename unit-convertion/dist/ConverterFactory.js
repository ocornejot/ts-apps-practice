"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConverterFactory {
    static create(constructor) {
        return new constructor();
    }
}
exports.default = ConverterFactory;
