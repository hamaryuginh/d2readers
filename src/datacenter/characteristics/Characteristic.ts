export default class Characteristic {
  public static readonly MODULE: string = 'Characteristics';

  public id: number;
  public keyword: string;
  public nameId: number;
  public asset: string;
  public categoryId: number;
  public visible: boolean;
  public order: number;
  public upgradable: boolean;
}
