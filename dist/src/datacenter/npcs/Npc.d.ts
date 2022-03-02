import AnimFunNpcData from "@datacenter/npcs/AnimFunNpcData";
export default class Npc {
    static readonly MODULE: string;
    id: number;
    nameId: number;
    dialogMessages: number[][];
    dialogReplies: number[][];
    actions: number[];
    gender: number;
    look: string;
    tokenShop: number;
    animFunList: AnimFunNpcData[];
    fastAnimsFun: boolean;
}
