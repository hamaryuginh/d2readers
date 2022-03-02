import EffectInstance from "@datacenter/effects/EffectInstance";
export default class Pet {
    static readonly MODULE: string;
    id: number;
    foodItems: number[];
    foodTypes: number[];
    minDurationBeforeMeal: number;
    maxDurationBeforeMeal: number;
    possibleEffects: EffectInstance[];
}
