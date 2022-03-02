export default class Emoticon {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    shortcutId: number;
    order: number;
    defaultAnim: string;
    persistancy: boolean;
    eight_directions: boolean;
    aura: boolean;
    anims: string[];
    cooldown: number;
    duration: number;
    weight: number;
    spellLevelId: number;
}
