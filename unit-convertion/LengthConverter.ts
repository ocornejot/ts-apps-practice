import Converter from "./Converter";

export type LengthType = keyof typeof LengthEnum;
export enum LengthEnum {
    Meter = 'Meter',
    Kilometer = 'Kilometer',
    Inch = 'Inch',
    Foot = 'Foot',
    Centimeter = 'Centimeter',
    Millimeter = 'Millimeter',
    Miles = 'Miles'
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

export default class LengthConverter extends Converter<LengthType> {
    convert(value: number, fromUnit: LengthType, toUnit: LengthType): number {
        return value * LengthValues[fromUnit] / LengthValues[toUnit];
    }
}