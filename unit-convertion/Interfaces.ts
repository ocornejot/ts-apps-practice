import { TemperatureType } from "./TemperatureConverter";

export type UnitType = LengthType | WeightType | TemperatureType;
export type LengthType = "Meter" | "Kilometer" | "Inch" | "Foot" | "Centimeter";
export type WeightType = "Kilogram" | "Gram" | "Pound";