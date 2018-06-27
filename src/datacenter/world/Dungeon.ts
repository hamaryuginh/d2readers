export default class Dungeon {
  public static readonly MODULE: string = 'Dungeons';

  public id: number;
  public nameId: number;
  public optimalPlayerLevel: number;
  public mapIds: number[];
  public entranceMapId: number;
  public exitMapId: number;
}
