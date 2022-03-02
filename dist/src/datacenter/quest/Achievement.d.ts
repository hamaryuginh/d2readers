export default class Achievement {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    categoryId: number;
    descriptionId: number;
    iconId: number;
    points: number;
    level: number;
    order: number;
    accountLinked: boolean;
    objectiveIds: number[];
    rewardIds: number[];
}
