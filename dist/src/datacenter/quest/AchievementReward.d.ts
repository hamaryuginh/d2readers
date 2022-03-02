export default class AchievementReward {
    static readonly MODULE: string;
    id: number;
    achievementId: number;
    criteria: string;
    kamasRatio: number;
    experienceRatio: number;
    kamasScaleWithPlayerLevel: boolean;
    itemsReward: number[];
    itemsQuantityReward: number[];
    emotesReward: number[];
    spellsReward: number[];
    titlesReward: number[];
    ornamentsReward: number[];
}
