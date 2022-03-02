export default class AchievementCategory {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    parentId: number;
    icon: string;
    order: number;
    color: string;
    achievementIds: number[];
}
