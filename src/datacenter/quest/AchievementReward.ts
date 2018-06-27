export default class AchievementReward {
  public static readonly MODULE: string = 'AchievementRewards';

  public id: number;
  public achievementId: number;
  public criteria: string;
  public kamasRatio: number;
  public experienceRatio: number;
  public kamasScaleWithPlayerLevel: boolean;
  public itemsReward: number[];
  public itemsQuantityReward: number[];
  public emotesReward: number[];
  public spellsReward: number[];
  public titlesReward: number[];
  public ornamentsReward: number[];
}
