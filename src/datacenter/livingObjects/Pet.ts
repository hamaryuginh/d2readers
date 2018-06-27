import EffectInstance from "@datacenter/effects/EffectInstance";

export default class Pet {
  public static readonly MODULE: string = 'Pets';

  public id: number;
  public foodItems: number[];
  public foodTypes: number[];
  public minDurationBeforeMeal: number;
  public maxDurationBeforeMeal: number;
  public possibleEffects: EffectInstance[];
}
