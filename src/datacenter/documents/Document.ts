export default class Document {
  public static readonly MODULE: string = 'Documents';

  public id: number;
  public typeId: number;
  public showTitle: boolean;
  public showBackgroundImage: boolean;
  public titleId: number;
  public authorId: number;
  public subTitleId: number;
  public contentId: number;
  public contentCSS: string;
  public clientProperties: string;
}
