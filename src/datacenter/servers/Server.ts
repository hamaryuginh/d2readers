export default class Server {
  public static readonly MODULE: string = 'Servers';

  public id: number;
  public nameId: number;
  public commentId: number;
  public openingDate: number;
  public language: string;
  public populationId: number;
  public gameTypeId: number;
  public communityId: number;
  public restrictedToLanguages: string[];
  public monoAccount: boolean;
}
