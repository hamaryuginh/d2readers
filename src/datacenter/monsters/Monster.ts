import AnimFunMonsterData from "@datacenter/monsters/AnimFunMonsterData";
import MonsterDrop from "@datacenter/monsters/MonsterDrop";
import MonsterGrade from "@datacenter/monsters/MonsterGrade";

export default class Monster {
  public static readonly MODULE: string = 'Monsters';

  public id: number;
  public nameId: number;
  public gfxId: number;
  public race: number;
  public grades: MonsterGrade[];
  public look: string;
  public useSummonSlot: boolean;
  public useBombSlot: boolean;
  public canPlay: boolean;
  public canTackle: boolean;
  public animFunList: AnimFunMonsterData[];
  public isBoss: boolean;
  public drops: MonsterDrop[];
  public subareas: number[];
  public spells: number[];
  public favoriteSubareaId: number;
  public isMiniBoss: boolean;
  public isQuestMonster: boolean;
  public correspondingMiniBossId: number;
  public speedAdjust: number = 0;
  public creatureBoneId: number;
  public canBePushed: boolean;
  public fastAnimsFun: boolean;
  public canSwitchPos: boolean;
  public incompatibleIdols: number[];
  public allIdolsDisabled: boolean;
  public dareAvailable: boolean;
  public incompatibleChallenges: number[];
  public useRaceValues: boolean;
  public aggressiveZoneSize: number;
  public aggressiveLevelDiff: number;
  public aggressiveImmunityCriterion: string;
  public aggressiveAttackDelay: number;
}
