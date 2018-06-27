export default class CensoredWord {
  public static readonly MODULE: string = 'CensoredWords';

  public id: number;
  public listId: number;
  public language: string;
  public word: string;
  public deepLooking: boolean;
}
