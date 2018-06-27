export default class WorldMap {
  public static readonly MODULE: string = 'WorldMaps';

  public id: number;
  public nameId: number;
  public origineX: number;
  public origineY: number;
  public mapWidth: number;
  public mapHeight: number;
  public horizontalChunck: number;
  public verticalChunck: number;
  public viewableEverywhere: boolean;
  public minScale: number;
  public maxScale: number;
  public startScale: number;
  public centerX: number;
  public centerY: number;
  public totalWidth: number;
  public totalHeight: number;
  public zoom: string[];
}
