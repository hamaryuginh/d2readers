import AmbientSound from "@datacenter/ambientSounds/AmbientSound";
export default class MapPosition {
    static readonly MODULE: string;
    id: number;
    posX: number;
    posY: number;
    outdoor: boolean;
    capabilities: number;
    nameId: number;
    showNameOnFingerpost: boolean;
    sounds: AmbientSound[];
    playlists: number[][];
    subAreaId: number;
    worldMap: number;
    hasPriorityOnWorldmap: boolean;
    allowPrism: boolean;
    isTransition: boolean;
    tacticalModeTemplateId: number;
}
