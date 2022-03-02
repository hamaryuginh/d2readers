export default class Quest {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    stepIds: number[];
    categoryId: number;
    repeatType: number;
    repeatLimit: number;
    isDungeonQuest: boolean;
    levelMin: number;
    levelMax: number;
    isPartyQuest: boolean;
    startCriterion: string;
}
