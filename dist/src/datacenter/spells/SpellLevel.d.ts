import EffectInstanceDice from "@datacenter/effects/instances/EffectInstanceDice";
export default class SpellLevel {
    static readonly MODULE: string;
    id: number;
    spellId: number;
    grade: number;
    spellBreed: number;
    apCost: number;
    minRange: number;
    range: number;
    castInLine: boolean;
    castInDiagonal: boolean;
    castTestLos: boolean;
    criticalHitProbability: number;
    needFreeCell: boolean;
    needTakenCell: boolean;
    needFreeTrapCell: boolean;
    rangeCanBeBoosted: boolean;
    maxStack: number;
    maxCastPerTurn: number;
    maxCastPerTarget: number;
    minCastInterval: number;
    initialCooldown: number;
    globalCooldown: number;
    minPlayerLevel: number;
    hideEffects: boolean;
    hidden: boolean;
    playAnimation: boolean;
    statesRequired: number[];
    statesAuthorized: number[];
    statesForbidden: number[];
    effects: EffectInstanceDice[];
    criticalEffect: EffectInstanceDice[];
    additionalEffectsZones: string[];
}
