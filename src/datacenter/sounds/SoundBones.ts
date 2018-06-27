import SoundAnimation from "@datacenter/sounds/SoundAnimation";

export default class SoundBones {
  public static readonly MODULE: string = 'SoundBones';

  public id: number;
  public keys: string[];
  public values: SoundAnimation[][];
}
