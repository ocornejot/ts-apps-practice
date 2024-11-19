import Converter, { ConverterInterface } from "./Converter";
import { UnitType } from "./Interfaces";

export type TemperatureType = keyof typeof TemperatureEnum;
export enum TemperatureEnum {
    Celsius = 'Celsius',
    Fahrenheit = 'Fahrenheit',
    Kelvin = 'Kelvin'
}

export type TemperatureConstructor = new () => TemperatureConverter;

enum TemperatureValues {
    Celsius = 1,
    Fahrenheit = 1.8,
    Kelvin = 273.15
}

class TemperatureConverter extends Converter<TemperatureType> {

    convert(value: number, fromUnit: TemperatureType, toUnit: TemperatureType): number {
        let result = this.convertToCelsius(value, fromUnit);
        return this.convertFromCelsius(result, toUnit);
    }   

    convertToCelsius(value: number, fromUnit: TemperatureType): number {
        if (fromUnit === TemperatureEnum.Fahrenheit) {
            return (value - 32) * (5 / 9);
        }
        if (fromUnit === TemperatureEnum.Kelvin) {
            return value - 273.15;
        }
        return value;
    }

    convertFromCelsius(value: number, toUnit: TemperatureType): number {
        if (toUnit === TemperatureEnum.Fahrenheit) {
            return value * (9 / 5) + 32;
        }
        if (toUnit === TemperatureEnum.Kelvin) {
            return value + 273.15;
        }
        return value;
    }
}

export default TemperatureConverter;