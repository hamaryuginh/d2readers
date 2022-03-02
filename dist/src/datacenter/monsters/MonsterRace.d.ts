export default class MonsterRace {
    static readonly MODULE: string;
    id: number;
    superRaceId: number;
    nameId: number;
    monsters: number[];
    aggressiveZoneSize: number;
    aggressiveLevelDiff: number;
    aggressiveImmunityCriterion: string;
    aggressiveAttackDelay: number;
}
