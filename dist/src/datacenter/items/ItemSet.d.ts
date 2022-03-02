import EffectInstance from "@datacenter/effects/EffectInstance";
export default class ItemSet {
    static readonly MODULE: string;
    id: number;
    items: number[];
    nameId: number;
    effects: EffectInstance[][];
    bonusIsSecret: boolean;
}
