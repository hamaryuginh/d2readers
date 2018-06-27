export default class ItemType {
  public static readonly MODULE: string = 'ItemTypes';

  public id: number;
  public nameId: number;
  public superTypeId: number;
  public plural: boolean;
  public gender: number;
  public rawZone: string;
  public mimickable: boolean;
  public craftXpRatio: number;
}
