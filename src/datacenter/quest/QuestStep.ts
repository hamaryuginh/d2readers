export default class QuestStep {
  public static readonly MODULE: string = 'QuestSteps';

  public id: number;
  public questId: number;
  public nameId: number;
  public descriptionId: number;
  public dialogId: number;
  public optimalLevel: number;
  public duration: number;
  public objectiveIds: number[];
  public rewardsIds: number[];
}
