export default class Challenge {
  public static readonly MODULE: string = 'Challenge';

  public id: number;
  public nameId: number;
  public descriptionId: number;
  public dareAvailable: boolean;
  public incompatibleChallenges: number[];
}
