export default class QuestStepRewards {
    static readonly MODULE: string;
    id: number;
    stepId: number;
    levelMin: number;
    levelMax: number;
    kamasRatio: number;
    experienceRatio: number;
    kamasScaleWithPlayerLevel: boolean;
    itemsReward: number[][];
    emotesReward: number[];
    jobsReward: number[];
    spellsReward: number[];
}
