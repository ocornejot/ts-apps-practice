export interface ConverterInterface<T> {
    value: number;
    fromUnit: T | null; 
    toUnit: T | null; 
    convert(value: number, fromUnit: T, toUnit: T): number
}

type ConvertionType = keyof typeof ConverterEnum;
export enum ConverterEnum {
    Length = "Length",
    Weight = "Weight",
    Temperature = "TemperatureConverter"
}

abstract class Converter<UnitType> implements ConverterInterface<UnitType> {
    value: number;
    fromUnit: UnitType | null;
    toUnit: UnitType | null;

    constructor() {
        this.value = 0;
        this.fromUnit = null;
        this.toUnit = null;
    }

    abstract convert<T extends UnitType>(value: number, fromUnit: T, toUnit: T): number;
}



export default Converter;