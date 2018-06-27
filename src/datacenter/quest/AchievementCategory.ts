export default class AchievementCategory {
  public static readonly MODULE: string = 'AchievementCategories';

  public id: number;
  public nameId: number;
  public parentId: number;
  public icon: string;
  public order: number;
  public color: string;
  public achievementIds: number[];
}
