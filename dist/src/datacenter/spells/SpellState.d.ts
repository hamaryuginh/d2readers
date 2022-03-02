export default class SpellState {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    preventsSpellCast: boolean;
    preventsFight: boolean;
    isSilent: boolean;
    cantDealDamage: boolean;
    invulnerable: boolean;
    incurable: boolean;
    cantBeMoved: boolean;
    cantBePushed: boolean;
    cantSwitchPosition: boolean;
    effectsIds: number[];
    icon: string;
    iconVisibilityMask: number;
    invulnerableMelee: boolean;
    invulnerableRange: boolean;
    cantTackle: boolean;
    cantBeTackled: boolean;
}
