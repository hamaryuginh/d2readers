export default class SoundAnimation {
    static readonly MODULE: string;
    id: number;
    name: string;
    label: string;
    filename: string;
    volume: number;
    rolloff: number;
    automationDuration: number;
    automationVolume: number;
    automationFadeIn: number;
    automationFadeOut: number;
    noCutSilence: boolean;
    startFrame: number;
}
