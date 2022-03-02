import MonsterDropCoefficient from "@datacenter/monsters/MonsterDropCoefficient";
export default class MonsterDrop {
    dropId: number;
    monsterId: number;
    objectId: number;
    percentDropForGrade1: number;
    percentDropForGrade2: number;
    percentDropForGrade3: number;
    percentDropForGrade4: number;
    percentDropForGrade5: number;
    count: number;
    criteria: string;
    hasCriteria: boolean;
    specificDropCoefficient: MonsterDropCoefficient[];
}
