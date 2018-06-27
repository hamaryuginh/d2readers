import EffectInstance from "@datacenter/effects/EffectInstance";

export default class ItemSet {
  public static readonly MODULE: string = 'ItemSets';

  public id: number;
  public items: number[];
  public nameId: number;
  public effects: EffectInstance[][];
  public bonusIsSecret: boolean;
}
