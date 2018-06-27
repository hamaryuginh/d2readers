export default class EffectInstance {
  public effectUid: number;
  public effectId: number;
  public targetId: number;
  public targetMask: string;
  public duration: number;
  public delay: number;
  public random: number;
  public group: number;
  public modificator: number;
  public trigger: boolean;
  public triggers: string;
  public visibleInTooltip: boolean = true;
  public visibleInBuffUi: boolean = true;
  public visibleInFightLog: boolean = true;
  public zoneSize: number;
  public zoneShape: number;
  public zoneMinSize: number;
  public zoneEfficiencyPercent: number;
  public zoneMaxEfficiency: number;
  public zoneStopAtTarget: number;
  public effectElement: number;
  public spellId: number;
}
