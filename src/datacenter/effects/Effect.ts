export default class Effect {
  public static readonly MODULE: string = 'Effects';

  public id: number;
  public descriptionId: number;
  public iconId: number;
  public characteristic: number;
  public category: number;
  public operator: string;
  public showInTooltip: boolean;
  public useDice: boolean;
  public forceMinMax: boolean;
  public boost: boolean;
  public active: boolean;
  public oppositeId: number;
  public theoreticalDescriptionId: number;
  public theoreticalPattern: number;
  public showInSet: boolean;
  public bonusType: number;
  public useInFight: boolean;
  public effectPriority: number;
  public elementId: number;
}
