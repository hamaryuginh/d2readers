export default class Emoticon {
  public static readonly MODULE: string = 'Emoticons';

  public id: number;
  public nameId: number;
  public shortcutId: number;
  public order: number;
  public defaultAnim: string;
  public persistancy: boolean;
  public eight_directions: boolean;
  public aura: boolean;
  public anims: string[];
  public cooldown: number = 1000;
  public duration: number = 0;
  public weight: number;
  public spellLevelId: number = 0;
}
