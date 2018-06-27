export default class CompanionCharacteristic {
  public static readonly MODULE: string = 'CompanionCharacteristics';

  public id: number;
  public caracId: number;
  public companionId: number;
  public order: number;
  public statPerLevelRange: number[][];
}
