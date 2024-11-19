import { TemperatureType } from "./TemperatureConverter";
import { WeightType } from "./WeightConverter";

export type UnitType = LengthType | WeightType | TemperatureType;
export type LengthType = "Meter" | "Kilometer" | "Inch" | "Foot" | "Centimeter";