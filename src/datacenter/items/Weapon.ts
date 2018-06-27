import Item from "@datacenter/items/Item";

export default class Weapon extends Item {
  public apCost: number;
  public minRange: number;
  public range: number;
  public maxCastPerTurn: number;
  public castInLine: boolean;
  public castInDiagonal: boolean;
  public castTestLos: boolean;
  public criticalHitProbability: number;
  public criticalHitBonus: number;
  public criticalFailureProbability: number;
}
