import { ConverterInterface } from "./Converter";
import { UnitType } from "./Interfaces";

export default class ConverterFactory {

    static create<T extends ConverterInterface<UnitType>>(constructor: { new (): T }):T {
        return new constructor();
    }
}