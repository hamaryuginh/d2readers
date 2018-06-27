export default class Quest {
  public static readonly MODULE: string = 'Quests';

  public id: number;
  public nameId: number;
  public stepIds: number[];
  public categoryId: number;
  public repeatType: number;
  public repeatLimit: number;
  public isDungeonQuest: boolean;
  public levelMin: number;
  public levelMax: number;
  public isPartyQuest: boolean;
  public startCriterion: string;
}
