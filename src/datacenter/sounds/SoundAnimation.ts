export default class SoundAnimation {
  public static readonly MODULE: string = 'SoundAnimations';

  public id: number;
  public name: string;
  public label: string;
  public filename: string;
  public volume: number;
  public rolloff: number;
  public automationDuration: number;
  public automationVolume: number;
  public automationFadeIn: number;
  public automationFadeOut: number;
  public noCutSilence: boolean;
  public startFrame: number;
}
