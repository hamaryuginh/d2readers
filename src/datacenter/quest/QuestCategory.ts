export default class QuestCategory {
  public static readonly MODULE: string = 'QuestCategory';

  public id: number;
  public nameId: number;
  public order: number;
  public questIds: number[];
}
