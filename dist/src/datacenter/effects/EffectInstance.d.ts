export default class EffectInstance {
    effectUid: number;
    effectId: number;
    targetId: number;
    targetMask: string;
    duration: number;
    delay: number;
    random: number;
    group: number;
    modificator: number;
    trigger: boolean;
    triggers: string;
    visibleInTooltip: boolean;
    visibleInBuffUi: boolean;
    visibleInFightLog: boolean;
    zoneSize: number;
    zoneShape: number;
    zoneMinSize: number;
    zoneEfficiencyPercent: number;
    zoneMaxEfficiency: number;
    zoneStopAtTarget: number;
    effectElement: number;
    spellId: number;
}
