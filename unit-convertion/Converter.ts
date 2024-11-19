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




enum LengthValues {
    Meter = 1,
    Kilometer = 1000,
    Inch = 0.0254,
    Foot = 0.3048,
    Centimeter = 0.01,
    Millimeter = 0.001,
    Miles = 1609.34
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

    // convertLength(value: number, fromUnit: LengthType, toUnit: LengthType): number {
    //     return value * LengthValues[fromUnit] / LengthValues[toUnit];
    // }

}



export default Converter;