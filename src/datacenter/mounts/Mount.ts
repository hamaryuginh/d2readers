import EffectInstance from "@datacenter/effects/EffectInstance";

export default class Mount {
  public static readonly MODULE: string = 'Mounts';

  public id: number;
  public familyId: number;
  public nameId: number;
  public look: string;
  public certificateId: number;
  public effects: EffectInstance[];
}
