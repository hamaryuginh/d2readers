export default class Skill {
  public static readonly MODULE: string = 'Skills';

  public id: number;
  public nameId: number;
  public parentJobId: number;
  public isForgemagus: boolean;
  public modifiableItemTypeIds: number[];
  public gatheredRessourceItem: number;
  public craftableItemIds: number[];
  public interactiveId: number;
  public range: number;
  public useRangeInClient: boolean;
  public useAnimation: string;
  public cursor: number;
  public elementActionId: number;
  public availableInHouse: boolean;
  public levelMin: number;
  public clientDisplay: boolean;
}
