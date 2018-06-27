import EffectInstance from "@datacenter/effects/EffectInstance";

export default class Item {
  public static readonly MODULE: string = 'Items';

  public id: number;
  public nameId: number;
  public typeId: number;
  public descriptionId: number;
  public iconId: number;
  public level: number;
  public realWeight: number;
  public cursed: boolean;
  public useAnimationId: number;
  public usable: boolean;
  public targetable: boolean;
  public exchangeable: boolean;
  public price: number;
  public twoHanded: boolean;
  public etheral: boolean;
  public itemSetId: number;
  public criteria: string;
  public criteriaTarget: string;
  public hideEffects: boolean;
  public enhanceable: boolean;
  public nonUsableOnAnother: boolean;
  public appearanceId: number;
  public secretRecipe: boolean;
  public dropMonsterIds: number[];
  public recipeSlots: number;
  public recipeIds: number[];
  public objectIsDisplayOnWeb: boolean;
  public bonusIsSecret: boolean;
  public possibleEffects: EffectInstance[];
  public favoriteSubAreas: number[];
  public favoriteSubAreasBonus: number;
  public craftXpRatio: number;
  public craftVisible: string;
  public craftFeasible: string;
  public needUseConfirm: boolean;
  public isDestructible: boolean;
  public isSaleable: boolean;
  public nuggetsBySubarea: number[][];
  public containerIds: number[];
  public resourcesBySubarea: number[][];
}
