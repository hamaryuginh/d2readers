export default class Idol {
    static readonly MODULE: string;
    id: number;
    description: string;
    categoryId: number;
    itemId: number;
    groupOnly: boolean;
    spellPairId: number;
    score: number;
    experienceBonus: number;
    dropBonus: number;
    synergyIdolsIds: number[];
    synergyIdolsCoeff: number[];
    incompatibleMonsters: number[];
}
