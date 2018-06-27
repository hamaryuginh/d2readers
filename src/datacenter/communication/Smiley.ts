export default class Smiley {
  public static readonly MODULE: string = 'Smileys';

  public id: number;
  public order: number;
  public gfxId: string;
  public forPlayers: boolean;
  public triggers: string[];
  public referenceId: number;
  public categoryId: number;
}
