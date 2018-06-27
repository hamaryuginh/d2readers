export default class MapScrollAction {
  public static readonly MODULE: string = 'MapScrollActions';

  public id: number;
  public rightExists: boolean;
  public bottomExists: boolean;
  public leftExists: boolean;
  public topExists: boolean;
  public rightMapId: number;
  public bottomMapId: number;
  public leftMapId: number;
  public topMapId: number;
}
