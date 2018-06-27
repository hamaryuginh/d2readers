import TransformData from "@datacenter/other/TransformData";

export default class SkinPosition {
  public static readonly MODULE: string = 'SkinPositions';

  public id: number;
  public transformation: TransformData[];
  public clip: string[];
  public skin: number[];
}
