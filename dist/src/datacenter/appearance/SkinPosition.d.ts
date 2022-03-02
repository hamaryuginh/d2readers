import TransformData from "@datacenter/other/TransformData";
export default class SkinPosition {
    static readonly MODULE: string;
    id: number;
    transformation: TransformData[];
    clip: string[];
    skin: number[];
}
