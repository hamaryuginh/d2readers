import Item from "@datacenter/items/Item";
export default class Weapon extends Item {
    apCost: number;
    minRange: number;
    range: number;
    maxCastPerTurn: number;
    castInLine: boolean;
    castInDiagonal: boolean;
    castTestLos: boolean;
    criticalHitProbability: number;
    criticalHitBonus: number;
    criticalFailureProbability: number;
}
