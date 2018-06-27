export default class Spell {
  public static readonly MODULE: string = 'Spells';

  public id: number;
  public nameId: number;
  public descriptionId: number;
  public typeId: number;
  public order: number;
  public scriptParams: string;
  public scriptParamsCritical: string;
  public scriptId: number;
  public scriptIdCritical: number;
  public iconId: number;
  public spellLevels: number[];
  public useParamCache: boolean = true;
  public verbose_cast: boolean;
  public default_zone: string;
}
