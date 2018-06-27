import Point from "@datacenter/other/Point";
import QuestObjectiveParameters from "@datacenter/quest/objectives/QuestObjectiveParameters";

export default class QuestObjective {
  public static readonly MODULE: string = 'QuestObjectives';

  public id: number;
  public stepId: number;
  public typeId: number;
  public dialogId: number;
  public parameters: QuestObjectiveParameters;
  public coords: Point;
  public mapId: number;
}
