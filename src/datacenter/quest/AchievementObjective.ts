export default class AchievementObjective {
  public static readonly MODULE: string = 'AchievementObjectives';

  public id: number;
  public achievementId: number;
  public order: number;
  public nameId: number;
  public criterion: string;
}
