import PlaylistSound from "@datacenter/ambientSounds/PlaylistSound";

export default class Playlist {
  public static readonly MODULE: string = 'Playlists';

  public id: number;
  public silenceDuration: number;
  public iteration: number;
  public type: number;
  public sounds: PlaylistSound[];
}
