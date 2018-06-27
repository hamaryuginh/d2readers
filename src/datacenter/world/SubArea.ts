import AmbientSound from "@datacenter/ambientSounds/AmbientSound";
import Rectangle from "@datacenter/other/Rectangle";

export default class SubArea {
  public static readonly MODULE: string = 'SubAreas';

  public id: number;
  public nameId: number;
  public areaId: number;
  public ambientSounds: AmbientSound[];
  public playlists: number[][];
  public mapIds: number[];
  public bounds: Rectangle;
  public shape: number[];
  public customWorldMap: number[];
  public packId: number;
  public level: number;
  public isConquestVillage: boolean;
  public basicAccountAllowed: boolean;
  public displayOnWorldMap: boolean;
  public mountAutoTripAllowed: boolean;
  public monsters: number[];
  public entranceMapIds: number[];
  public exitMapIds: number[];
  public capturable: boolean;
  public achievements: number[];
  public quests: number[][];
  public npcs: number[][];
  public exploreAchievementId: number;
  public isDiscovered: boolean;
  public harvestables: number[];
}
