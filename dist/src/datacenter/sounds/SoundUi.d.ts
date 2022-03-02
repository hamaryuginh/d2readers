import SoundUiElement from "@datacenter/sounds/SoundUiElement";
export default class SoundUi {
    static readonly MODULE: string;
    id: number;
    uiName: string;
    openFile: string;
    closeFile: string;
    subElements: SoundUiElement[];
}
