import EffectInstance from "@datacenter/effects/EffectInstance";
export default class Mount {
    static readonly MODULE: string;
    id: number;
    familyId: number;
    nameId: number;
    look: string;
    certificateId: number;
    effects: EffectInstance[];
}
