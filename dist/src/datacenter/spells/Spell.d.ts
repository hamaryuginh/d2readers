export default class Spell {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    descriptionId: number;
    typeId: number;
    order: number;
    scriptParams: string;
    scriptParamsCritical: string;
    scriptId: number;
    scriptIdCritical: number;
    iconId: number;
    spellLevels: number[];
    useParamCache: boolean;
    verbose_cast: boolean;
    default_zone: string;
}
