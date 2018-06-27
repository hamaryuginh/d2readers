export default class ChatChannel {
  public static readonly MODULE: string = 'ChatChannels';

  public id: number;
  public nameId: number;
  public descriptionId: number;
  public shortcut: string;
  public shortcutKey: string;
  public isPrivate: boolean;
  public allowObjects: boolean;
}
