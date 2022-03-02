import Rectangle from "@datacenter/other/Rectangle";

export default class Area {
  public static readonly MODULE: string = 'Areas';

  public id: number;
  public nameId: number;
  public superAreaId: number;
  public containHouses: boolean;
  public containPaddocks: boolean;
  public bounds: Rectangle;
  public worldmapId: number;
  public hasWorldMap: boolean;
  public hasSuggestion: boolean;
}
