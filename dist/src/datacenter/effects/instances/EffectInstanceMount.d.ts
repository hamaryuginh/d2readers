import EffectInstance from "@datacenter/effects/EffectInstance";
import EffectInstanceInteger from "@datacenter/effects/instances/EffectInstanceInteger";
export default class EffectInstanceMount extends EffectInstance {
    id: number;
    expirationDate: number;
    model: number;
    name: string;
    owner: string;
    level: number;
    sex: boolean;
    isRideable: boolean;
    isFeconded: boolean;
    isFecondationReady: boolean;
    reproductionCount: number;
    reproductionCountMax: number;
    effects: EffectInstanceInteger[];
    capacities: number[];
}
