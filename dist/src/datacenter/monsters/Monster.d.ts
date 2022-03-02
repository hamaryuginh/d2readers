import AnimFunMonsterData from "@datacenter/monsters/AnimFunMonsterData";
import MonsterDrop from "@datacenter/monsters/MonsterDrop";
import MonsterGrade from "@datacenter/monsters/MonsterGrade";
export default class Monster {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    gfxId: number;
    race: number;
    grades: MonsterGrade[];
    look: string;
    useSummonSlot: boolean;
    useBombSlot: boolean;
    canPlay: boolean;
    canTackle: boolean;
    animFunList: AnimFunMonsterData[];
    isBoss: boolean;
    drops: MonsterDrop[];
    subareas: number[];
    spells: number[];
    favoriteSubareaId: number;
    isMiniBoss: boolean;
    isQuestMonster: boolean;
    correspondingMiniBossId: number;
    speedAdjust: number;
    creatureBoneId: number;
    canBePushed: boolean;
    fastAnimsFun: boolean;
    canSwitchPos: boolean;
    incompatibleIdols: number[];
    allIdolsDisabled: boolean;
    dareAvailable: boolean;
    incompatibleChallenges: number[];
    useRaceValues: boolean;
    aggressiveZoneSize: number;
    aggressiveLevelDiff: number;
    aggressiveImmunityCriterion: string;
    aggressiveAttackDelay: number;
    scaleGradeRef: number;
}
