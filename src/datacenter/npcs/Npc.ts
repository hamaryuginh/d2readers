import AnimFunNpcData from "@datacenter/npcs/AnimFunNpcData";

export default class Npc {
  public static readonly MODULE: string = 'Npcs';

  public id: number;
  public nameId: number;
  public dialogMessages: number[][];
  public dialogReplies: number[][];
  public actions: number[];
  public gender: number;
  public look: string;
  public tokenShop: number;
  public animFunList: AnimFunNpcData[];
  public fastAnimsFun: boolean;
}
