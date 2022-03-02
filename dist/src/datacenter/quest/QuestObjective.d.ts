import Point from "@datacenter/other/Point";
import QuestObjectiveParameters from "@datacenter/quest/objectives/QuestObjectiveParameters";
export default class QuestObjective {
    static readonly MODULE: string;
    id: number;
    stepId: number;
    typeId: number;
    dialogId: number;
    parameters: QuestObjectiveParameters;
    coords: Point;
    mapId: number;
}
