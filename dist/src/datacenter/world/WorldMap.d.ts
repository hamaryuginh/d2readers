export default class WorldMap {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    origineX: number;
    origineY: number;
    mapWidth: number;
    mapHeight: number;
    horizontalChunck: number;
    verticalChunck: number;
    viewableEverywhere: boolean;
    minScale: number;
    maxScale: number;
    startScale: number;
    centerX: number;
    centerY: number;
    totalWidth: number;
    totalHeight: number;
    zoom: string[];
}
