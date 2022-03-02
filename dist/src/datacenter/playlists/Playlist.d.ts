import PlaylistSound from "@datacenter/ambientSounds/PlaylistSound";
export default class Playlist {
    static readonly MODULE: string;
    id: number;
    silenceDuration: number;
    iteration: number;
    type: number;
    sounds: PlaylistSound[];
}
