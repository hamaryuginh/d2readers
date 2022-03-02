import PlaylistSound from "@datacenter/ambientSounds/PlaylistSound";
export default class AmbientSound extends PlaylistSound {
    static readonly MODULE: string;
    criterionId: number;
    silenceMin: number;
    silenceMax: number;
    type_id: number;
}
