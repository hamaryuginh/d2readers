export default class CharacteristicCategory {
  public static readonly MODULE: string = 'CharacteristicCategories';

  public id: number;
  public nameId: number;
  public order: number;
  public characteristicIds: number[];
}
