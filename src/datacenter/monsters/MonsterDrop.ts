import MonsterDropCoefficient from "@datacenter/monsters/MonsterDropCoefficient";

export default class MonsterDrop {
  public dropId: number;
  public monsterId: number;
  public objectId: number;
  public percentDropForGrade1: number;
  public percentDropForGrade2: number;
  public percentDropForGrade3: number;
  public percentDropForGrade4: number;
  public percentDropForGrade5: number;
  public count: number;
  public criteria: string;
  public hasCriteria: boolean;
  public specificDropCoefficient: MonsterDropCoefficient[];
}
