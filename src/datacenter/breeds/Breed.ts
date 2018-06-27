import BreedRoleByBreed from "@datacenter/breeds/BreedRoleByBreed";

export default class Breed {
  public static readonly MODULE: string = 'Breeds';

  public id: number;
  public shortNameId: number;
  public longNameId: number;
  public descriptionId: number;
  public gameplayDescriptionId: number;
  public maleLook: string;
  public femaleLook: string;
  public creatureBonesId: number;
  public maleArtwork: number;
  public femaleArtwork: number;
  public statsPointsForStrength: number[][];
  public statsPointsForIntelligence: number[][];
  public statsPointsForChance: number[][];
  public statsPointsForAgility: number[][];
  public statsPointsForVitality: number[][];
  public statsPointsForWisdom: number[][];
  public breedSpellsId: number[];
  public breedRoles: BreedRoleByBreed[];
  public maleColors: number[];
  public femaleColors: number[];
  public spawnMap: number;
  public complexity: number;
  public sortIndex: number;
}
