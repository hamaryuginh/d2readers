import SoundUiElement from "@datacenter/sounds/SoundUiElement";

export default class SoundUi {
  public static readonly MODULE: string = 'SoundUi';

  public id: number;
  public uiName: string;
  public openFile: string;
  public closeFile: string;
  public subElements: SoundUiElement[];
}
