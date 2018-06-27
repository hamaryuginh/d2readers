export default class Bonus {
  public static readonly MODULE: string = 'Bonuses';

  public id: number;
  public type: number;
  public amount: number;
  public criterionsIds: number[];
}
