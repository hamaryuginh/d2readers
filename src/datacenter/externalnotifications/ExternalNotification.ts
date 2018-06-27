export default class ExternalNotification {
  public static readonly MODULE: string = 'ExternalNotifications';

  public id: number;
  public categoryId: number;
  public iconId: number;
  public colorId: number;
  public descriptionId: number;
  public defaultEnable: boolean;
  public defaultSound: boolean;
  public defaultNotify: boolean;
  public defaultMultiAccount: boolean;
  public name: string;
  public messageId: number;
}
