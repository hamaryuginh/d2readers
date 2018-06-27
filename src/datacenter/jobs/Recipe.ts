export default class Recipe {
  public static readonly MODULE: string = 'Recipes';

  public resultId: number;
  public resultNameId: number;
  public resultTypeId: number;
  public resultLevel: number;
  public ingredientIds: number[];
  public quantities: number[];
  public jobId: number;
  public skillId: number;
}
