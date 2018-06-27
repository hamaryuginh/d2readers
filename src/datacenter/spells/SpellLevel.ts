import EffectInstanceDice from "@datacenter/effects/instances/EffectInstanceDice";

export default class SpellLevel {
  public static readonly MODULE: string = 'SpellLevels';

  public id: number;
  public spellId: number;
  public grade: number;
  public spellBreed: number;
  public apCost: number;
  public minRange: number;
  public range: number;
  public castInLine: boolean;
  public castInDiagonal: boolean;
  public castTestLos: boolean;
  public criticalHitProbability: number;
  public needFreeCell: boolean;
  public needTakenCell: boolean;
  public needFreeTrapCell: boolean;
  public rangeCanBeBoosted: boolean;
  public maxStack: number;
  public maxCastPerTurn: number;
  public maxCastPerTarget: number;
  public minCastInterval: number;
  public initialCooldown: number;
  public globalCooldown: number;
  public minPlayerLevel: number;
  public hideEffects: boolean;
  public hidden: boolean;
  public playAnimation: boolean;
  public statesRequired: number[];
  public statesAuthorized: number[];
  public statesForbidden: number[];
  public effects: EffectInstanceDice[];
  public criticalEffect: EffectInstanceDice[];
  public additionalEffectsZones: string[];
}
