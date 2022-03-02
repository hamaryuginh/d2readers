import Rectangle from "@datacenter/other/Rectangle";
export default class Area {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    superAreaId: number;
    containHouses: boolean;
    containPaddocks: boolean;
    bounds: Rectangle;
    worldmapId: number;
    hasWorldMap: boolean;
    hasSuggestion: boolean;
}
