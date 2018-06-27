export default class SpellState {
  public static readonly MODULE: string = 'SpellStates';

  public id: number;
  public nameId: number;
  public preventsSpellCast: boolean;
  public preventsFight: boolean;
  public isSilent: boolean;
  public cantDealDamage: boolean;
  public invulnerable: boolean;
  public incurable: boolean;
  public cantBeMoved: boolean;
  public cantBePushed: boolean;
  public cantSwitchPosition: boolean;
  public effectsIds: number[];
  public icon: string = "";
  public iconVisibilityMask: number;
  public invulnerableMelee: boolean;
  public invulnerableRange: boolean;
  public cantTackle: boolean;
  public cantBeTackled: boolean;
}
