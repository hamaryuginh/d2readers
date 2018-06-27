import AmbientSound from "@datacenter/ambientSounds/AmbientSound";

export default class MapPosition {
  public static readonly MODULE: string = 'MapPositions';

  public id: number;
  public posX: number;
  public posY: number;
  public outdoor: boolean;
  public capabilities: number;
  public nameId: number;
  public showNameOnFingerpost: boolean;
  public sounds: AmbientSound[];
  public playlists: number[][];
  public subAreaId: number;
  public worldMap: number;
  public hasPriorityOnWorldmap: boolean;
  public allowPrism: boolean;
  public isTransition: boolean;
  public tacticalModeTemplateId: number;
}
