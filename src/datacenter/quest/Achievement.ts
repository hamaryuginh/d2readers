export default class Achievement {
  public static readonly MODULE: string = 'Achievements';

  public id: number;
  public nameId: number;
  public categoryId: number;
  public descriptionId: number;
  public iconId: number;
  public points: number;
  public level: number;
  public order: number;
  public accountLinked: boolean;
  public objectiveIds: number[];
  public rewardIds: number[];
}
