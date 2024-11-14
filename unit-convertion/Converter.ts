export interface ConverterInterface {
    value: number;
    // type: ConvertionType | null;
    fromUnit: UnitType | null; 
    toUnit: UnitType | null; 
}

type ConvertionType = "Length" | "Weight" | "Temperature";

type UnitType = LengthType | WeightType | TemperatureType;
type LengthType = "Meter" | "Kilometer" | "Inch" | "Foot" | "Centimeter";
type WeightType = "Kilogram" | "Gram" | "Pound";
type TemperatureType = "Celsius" | "Fahrenheit" | "Kelvin";

enum LengthValues {
    Meter = 1,
    Kilometer = 1000,
    Inch = 0.0254,
    Foot = 0.3048,
    Centimeter = 0.01,
    Millimeter = 0.001,
    Miles = 1609.34
}

enum WeightValues {
    Kilogram = 1,
    Gram = 0.001,
    Pound = 0.453592
}

enum TemperatureValues {
    Celsius = 1,
    Fahrenheit = 1.8,
    Kelvin = 273.15
}

class Converter implements ConverterInterface {
    value: number;
    type: ConvertionType | null;
    fromUnit: UnitType | null;
    toUnit: UnitType | null;

    constructor() {
        this.value = 0;
        this.type = null;
        this.fromUnit = null;
        this.toUnit = null;
    }

    convertLength(value: number, fromUnit: LengthType, toUnit: LengthType): number {
        return value * LengthValues[fromUnit] / LengthValues[toUnit];
    }

    convertWeight(value: number, fromUnit: WeightType, toUnit: WeightType): number {
        return value * WeightValues[fromUnit] / WeightValues[toUnit];
    }

    convertTemperature(value: number, fromUnit: TemperatureType, toUnit: TemperatureType): number {
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



export default Converter;