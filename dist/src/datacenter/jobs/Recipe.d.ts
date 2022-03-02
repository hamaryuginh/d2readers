export default class Recipe {
    static readonly MODULE: string;
    resultId: number;
    resultNameId: number;
    resultTypeId: number;
    resultLevel: number;
    ingredientIds: number[];
    quantities: number[];
    jobId: number;
    skillId: number;
}
