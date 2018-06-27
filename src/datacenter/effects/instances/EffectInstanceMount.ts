import EffectInstance from "@datacenter/effects/EffectInstance";
import EffectInstanceInteger from "@datacenter/effects/instances/EffectInstanceInteger";

export default class EffectInstanceMount extends EffectInstance {
  public id: number;
  public expirationDate: number;
  public model: number;
  public name: string = "";
  public owner: string = "";
  public level: number = 0;
  public sex: boolean = false;
  public isRideable: boolean = false;
  public isFeconded: boolean = false;
  public isFecondationReady: boolean = false;
  public reproductionCount: number = 0;
  public reproductionCountMax: number = 0;
  public effects: EffectInstanceInteger[];
  public capacities: number[];
}
