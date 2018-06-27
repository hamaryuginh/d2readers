export default class NamingRule {
  public static readonly MODULE: string = 'NamingRules';

  public id: number;
  public minLength: number;
  public maxLength: number;
  public regexp: string;
}
