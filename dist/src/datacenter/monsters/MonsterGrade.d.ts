import MonsterBonusCharacteristics from "@datacenter/monsters/MonsterBonusCharacteristics";
export default class MonsterGrade {
    grade: number;
    monsterId: number;
    level: number;
    vitality: number;
    paDodge: number;
    pmDodge: number;
    wisdom: number;
    earthResistance: number;
    airResistance: number;
    fireResistance: number;
    waterResistance: number;
    neutralResistance: number;
    gradeXp: number;
    lifePoints: number;
    actionPoints: number;
    movementPoints: number;
    damageReflect: number;
    hiddenLevel: number;
    strength: number;
    intelligence: number;
    chance: number;
    agility: number;
    bonusRange: number;
    startingSpellId: number;
    bonusCharacteristics: MonsterBonusCharacteristics;
}
