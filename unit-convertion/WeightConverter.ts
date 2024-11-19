import Converter from "./Converter";

export type WeightType = keyof typeof WeightEnum;
export enum WeightEnum {
    Kilogram = 'Kilogram',
    Gram = 'Gram',
    Pound = 'Pound',
}

enum WeightValues {
    Kilogram = 1,
    Gram = 0.001,
    Pound = 0.453592
}

export class WeightConverter extends Converter<WeightType> {
    convert(value: number, fromUnit: WeightType, toUnit: WeightType): number {
        return value * WeightValues[fromUnit] / WeightValues[toUnit];
    }
}