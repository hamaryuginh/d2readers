export default class MonsterRace {
  public static readonly MODULE: string = 'MonsterRaces';

  public id: number;
  public superRaceId: number;
  public nameId: number;
  public monsters: number[];
  public aggressiveZoneSize: number;
  public aggressiveLevelDiff: number;
  public aggressiveImmunityCriterion: string;
  public aggressiveAttackDelay: number;
}
