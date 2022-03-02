export default class QuestStep {
    static readonly MODULE: string;
    id: number;
    questId: number;
    nameId: number;
    descriptionId: number;
    dialogId: number;
    optimalLevel: number;
    duration: number;
    objectiveIds: number[];
    rewardsIds: number[];
}
