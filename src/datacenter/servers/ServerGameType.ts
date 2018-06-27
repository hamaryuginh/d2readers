export default class ServerGameType {
  public static readonly MODULE: string = 'ServerGameTypes';

  public id: number;
  public selectableByPlayer: boolean;
  public nameId: number;
  public rulesId: number;
  public descriptionId: number;
}
