import BreedRoleByBreed from "@datacenter/breeds/BreedRoleByBreed";
export default class Breed {
    static readonly MODULE: string;
    id: number;
    shortNameId: number;
    longNameId: number;
    descriptionId: number;
    gameplayDescriptionId: number;
    maleLook: string;
    femaleLook: string;
    creatureBonesId: number;
    maleArtwork: number;
    femaleArtwork: number;
    statsPointsForStrength: number[][];
    statsPointsForIntelligence: number[][];
    statsPointsForChance: number[][];
    statsPointsForAgility: number[][];
    statsPointsForVitality: number[][];
    statsPointsForWisdom: number[][];
    breedSpellsId: number[];
    breedRoles: BreedRoleByBreed[];
    maleColors: number[];
    femaleColors: number[];
    spawnMap: number;
    complexity: number;
    sortIndex: number;
}
