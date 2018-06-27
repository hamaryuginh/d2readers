export default class Companion {
  public static readonly MODULE: string = 'Companions';

  public id: number;
  public nameId: number;
  public look: string;
  public webDisplay: boolean;
  public descriptionId: number;
  public startingSpellLevelId: number;
  public assetId: number;
  public characteristics: number[];
  public spells: number[];
  public creatureBoneId: number;
}
