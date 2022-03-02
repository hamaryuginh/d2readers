export default class Skill {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    parentJobId: number;
    isForgemagus: boolean;
    modifiableItemTypeIds: number[];
    gatheredRessourceItem: number;
    craftableItemIds: number[];
    interactiveId: number;
    range: number;
    useRangeInClient: boolean;
    useAnimation: string;
    cursor: number;
    elementActionId: number;
    availableInHouse: boolean;
    levelMin: number;
    clientDisplay: boolean;
}
