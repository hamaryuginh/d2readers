import PlaylistSound from "@datacenter/ambientSounds/PlaylistSound";

export default class AmbientSound extends PlaylistSound {
  public static readonly MODULE: string = 'AmbientSounds';

  public criterionId: number;
  public silenceMin: number;
  public silenceMax: number;
  public type_id: number;
}
