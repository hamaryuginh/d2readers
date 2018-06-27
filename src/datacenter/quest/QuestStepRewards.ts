export default class QuestStepRewards {
  public static readonly MODULE: string = 'QuestStepRewards';

  public id: number;
  public stepId: number;
  public levelMin: number;
  public levelMax: number;
  public kamasRatio: number;
  public experienceRatio: number;
  public kamasScaleWithPlayerLevel: boolean;
  public itemsReward: number[][];
  public emotesReward: number[];
  public jobsReward: number[];
  public spellsReward: number[];
}
