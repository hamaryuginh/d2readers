export default class Idol {
  public static readonly MODULE: string = 'Idols';

  public id: number;
  public description: string;
  public categoryId: number;
  public itemId: number;
  public groupOnly: boolean;
  public spellPairId: number;
  public score: number;
  public experienceBonus: number;
  public dropBonus: number;
  public synergyIdolsIds: number[];
  public synergyIdolsCoeff: number[];
  public incompatibleMonsters: number[];
}
