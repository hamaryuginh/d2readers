export default class Effect {
    static readonly MODULE: string;
    id: number;
    descriptionId: number;
    iconId: number;
    characteristic: number;
    category: number;
    operator: string;
    showInTooltip: boolean;
    useDice: boolean;
    forceMinMax: boolean;
    boost: boolean;
    active: boolean;
    oppositeId: number;
    theoreticalDescriptionId: number;
    theoreticalPattern: number;
    showInSet: boolean;
    bonusType: number;
    useInFight: boolean;
    effectPriority: number;
    elementId: number;
}
